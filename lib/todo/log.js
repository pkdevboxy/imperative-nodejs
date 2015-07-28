const Promise = require("bluebird");
const {contract} = require("imp/contracts");
const {go} = require("imp/async");
const FileStorage = require("./file-storage");


module.exports = class Log {
    static new({databaseDir, logFileSize = 5 * 1024 * 1024}) {
        return new Log(databaseDir, logFileSize);
    }

    start() {
        return this._storage.listFiles().then(files => {
            if (files.length === 0) {
                return this._createFresh();
            } else {
                const lastFileId = verifyFileNames(files);
                return this._createExisting(lastFileId);
            }
        });
    }

    addRecord(record) {
        contract("record should not be empty", record.length > 0);
        contract("record should not contain zero bytes", true);

        record = appendZeroByte(record);
        const defered = Promise.pending();
        this._tasks.push([record, defered]);
        return defered.promise;
    }

    fetchRecord(offset) {
        const fileName = this._fileIdForOffset(offset).toString();
        const fileOffset = this._inFileOffset(offset);
        return this._storage.readCStringFromFileAsync(fileName, fileOffset);
    }

    fetchLastRecord() {
        if (this._currentFile() === 0) {
            return Promise.resolve(null);
        }

        const file = (this._currentFile() - 1).toString();
        let offset = 0;
        let previousRecord = null;
        const self = this;
        return go(function* () {
            while (offset < self._logFileSize) {
                const record = yield self._storage.readFromFile(file, offset);
                if (record.length === 0) {
                    return previousRecord;
                }
                offset += record.length + 1;
                previousRecord = record;
            }
            return previousRecord;
        });
    }

    flush() {
        return this._storage.flush();
    }


    constructor(databaseDir, logFileSize) {
        this._storage = FileStorage.new(databaseDir);
        this._logFileSize = logFileSize;
        this._currentOffset = 0;
        this._tasks = new AsyncQueue();

        const self = this;
        go(function* () {
            for (;;) {
                const task = yield self._tasks.pop();
                if (!task) {
                    return;
                }
                const [record, d] = task;

                try {
                    yield self._ensureHasSpace(record);
                    const fileName = self._currentFile().toString();
                    const fileOffset = self._currentInFileOffset();
                    yield self._storage.writeToFile(fileName, record, fileOffset);

                    const recordOffset = self._currentOffset;
                    yield self._increaseOffset(record.length);
                    d.fulfill(recordOffset);
                } catch (error) {
                    d.reject(error);
                }
            }
        });
    }

    _ensureHasSpace(record) {
        return record.length < this._currentFreeSpace()
            ? Promise.resolve()
            : this._increaseOffset(this._currentFreeSpace());
    }

    _increaseOffset(amount) {
        const newOffset = this._currentOffset + amount;
        const newFile = this._fileIdForOffset(newOffset);
        if (newFile === this._fileIdForOffset(this._currentOffset)) {
            this._currentOffset += amount;
            return Promise.resolve();
        } else {
            this.flush();
            return this._storage
                .addFile(newFile.toString(), this._logFileSize)
                .then(() => this._currentOffset += amount);
        }
    }

    _createFresh() {
        return this._storage.addFile("0", this._logFileSize);
    }

    _createExisting(fileId) {
        const nextFile = (fileId + 1);
        this._currentOffset = nextFile * this._logFileSize;
        return this._storage.addFile(nextFile.toString(), this._logFileSize);
    }

    _currentFile() {
        return this._fileIdForOffset(this._currentOffset);
    }

    _fileIdForOffset(offset) {
        return Math.floor(offset / this._logFileSize);
    }

    _inFileOffset(offset) {
        return offset % this._logFileSize;
    }

    _currentInFileOffset() {
        return this._inFileOffset(this._currentOffset);
    }

    _currentFreeSpace() {
        return this._logFileSize - this._currentInFileOffset();
    }
};

function verifyFileNames(names) {
    const fileIds = names.map(name => {
        const result = parseInt(name, 10);
        if (Number.isNaN(result)) {
            throw new Error("Broken log");
        }
        return result;
    });

    fileIds.sort();

    for (let i = 0; i < fileIds.length; i++) {
        if (fileIds[i] !== i) {
            throw new Error("Broken log");
        }
    }

    return fileIds[fileIds.length - 1];
}


const _zero = new Buffer([0]);

function appendZeroByte(buffer) {
    return Buffer.concat([buffer, _zero]);
}


class AsyncQueue {
    constructor() {
        this._pendingTasks = [];
        this._pendingDeferals = [];
    }

    push(task) {
        this._pendingTasks.push(task);
        this._tryAdvance();
    }

    pop() {
        const d = Promise.pending();
        this._pendingDeferals.push(d);
        this._tryAdvance();
        return d.promise;
    }

    _tryAdvance() {
        if (this._pendingTasks.length > 0 && this._pendingDeferals.length > 0) {
            this._pendingDeferals.pop()
                .fulfill(this._pendingTasks.pop());
        }
    }
}
