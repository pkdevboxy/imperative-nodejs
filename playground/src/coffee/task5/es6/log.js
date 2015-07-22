"use strict";
const Promise = require("bluebird");

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

class Log {
    constructor(storage, logFileSize) {
        this._storage = storage;
        this._logFileSize = logFileSize;
        this._currentOffset = 0;
        this._tasks = new AsyncQueue();

        const worker = Promise.coroutine(function* (self) {
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
                    yield self._storage.writeToFileAsync(fileName, record, fileOffset);

                    const recordOffset = self._currentOffset;
                    yield self._increaseOffset(record.length);
                    d.fulfill(recordOffset);
                } catch (error) {
                    d.reject(error);
                }
            }
        });

        worker(this);
    }

    printStats() {
        this._storage.printStats();
    }

    start(callback) {
        return this.startAsync().nodeify(callback);
    }

    writeRecord(record, callback) {
        return this.writeRecordAsync(record).nodeify(callback);
    }

    readRecord(offset, callback) {
        return this.readRecordAsync(offset).nodeify(callback);
    }

    startAsync() {
        return this._storage.addFileAsync("0", this._logFileSize)
            .then(() => this);
    }

    writeRecordAsync(record) {
        record = appendZeroByte(record);
        const d = Promise.pending();
        this._tasks.push([record, d]);
        return d.promise;
    }

    readRecordAsync(offset) {
        const fileName = this._fileIdForOffset(offset).toString();
        const fileOffset = this._inFileOffset(offset);
        return this._storage.readCStringFromFileAsync(fileName, fileOffset);
    }

    flush() {
        return this._storage.flush();
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
                .addFileAsync(newFile.toString(), this._logFileSize)
                .then(() => this._currentOffset += amount);
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
}


module.exports = Log;
