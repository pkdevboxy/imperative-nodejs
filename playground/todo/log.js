const Promise = require("bluebird");
const {contract} = require("imp/contracts");
const {go, AsyncQueue} = require("imp/async");
const FileStorage = require("./file-storage");


/**
 * Append only database, which stores c strings (Buffers without zero bytes).
 * Records are cached in memory. It's user's responsibility to call the flush method
 * when appropriate.
 *
 * @type {Log}
 */
module.exports = class Log {
    /**
     * Starts a log in the given dir. If the dir is empty, the new log is started,
     * otherwise the log uses existing files
     *
     * @param databaseDir directory with log files
     * @param logFileSize size of a single log file
     * @returns {Promise.<Log>}
     */
    static start({databaseDir, logFileSize = 5 * 1024 * 1024}) {
        const storage = FileStorage.new(databaseDir);
        return go(function* () {
            const files = yield storage.listFiles();
            if (files.length === 0) {
                yield storage.addFile("0", logFileSize);
                return new Log(storage, logFileSize, 0);
            }

            const lastFile = verifyFileNames(files);
            const nextFile = lastFile + 1;
            const offset = nextFile * logFileSize;
            yield storage.addFile(nextFile.toString(), logFileSize);
            return new Log(storage, logFileSize, offset);
        });
    }

    /**
     * Stops the log and ensures that all information is persisted.
     * @returns {*}
     */
    stop() {
        return this.flush();
    }

    /**
     * Adds a record to log.
     * @param {Buffer} record
     * @returns {Promise.<int>} saved record offset.
     */
    addRecord(record) {
        contract("record should not be empty", record.length > 0);
        contract("record should not contain zero bytes", true);
        if (!(record.length < this._logFileSize)) {
            throw new Error("record should not exceed file size");
        }

        record = appendZeroByte(record);
        const deferred = Promise.pending();
        this._tasks.push(["write", deferred, record]);
        return deferred.promise;
    }

    /**
     * Reads the record by offset.
     *
     * @param {int} offset
     * @returns {Promise.<Buffer>}
     */
    fetchRecord(offset) {
        const fileName = this._fileIdForOffset(offset).toString();
        const fileOffset = this._inFileOffset(offset);
        return this._storage.readFromFile(fileName, fileOffset);
    }

    /**
     * Fetches the last record in the log.
     *
     * @returns {Promise.<?Buffer>} the last record or null if the log is empty.
     */
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

    /**
     * Flushes the log content to disk.
     *
     * @returns {Promise}
     */
    flush() {
        const deferred = Promise.pending();
        this._tasks.push(["flush", deferred]);
        return deferred.promise;
    }


    constructor(storage, logFileSize, offset) {
        this._storage = storage;
        this._logFileSize = logFileSize;
        this._currentOffset = offset;
        this._tasks = new AsyncQueue();

        const self = this;
        go(function* () {
            while (true) {
                const task = yield self._tasks.pop();
                if (!task) {
                    return;
                }
                //noinspection UnnecessaryLocalVariableJS WEB-17578
                const [cmd, d, record] = task;

                try {
                    if (cmd === "write") {
                        yield self._ensureHasSpace(record);
                        const fileName = self._currentFile().toString();
                        const fileOffset = self._currentInFileOffset();
                        yield self._storage.writeToFile(fileName, record, fileOffset);

                        const recordOffset = self._currentOffset;
                        yield self._increaseOffset(record.length);
                        d.fulfill(recordOffset);
                    } else {
                        d.fulfill(yield self._storage.flush());
                    }
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
                .then(() => {
                    this._currentOffset += amount;
                });
        }
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
