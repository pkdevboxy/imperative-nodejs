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

        const worker = async function (self) {
            for (;;) {
                const task = await self._tasks.pop();
                if (!task) {
                    return;
                }
                const [record, d] = task;

                try {
                    await self._ensureHasSpace(record);
                    const fileName = self._currentFile().toString();
                    const fileOffset = self._currentInFileOffset();
                    await self._storage.writeToFileAsync(fileName, record, fileOffset);

                    const recordOffset = self._currentOffset;
                    await self._increaseOffset(record.length);
                    d.fulfill(recordOffset);
                } catch (error) {
                    d.reject(error);
                }
            }
        };

        worker(this);
    }

    printStats() {
        this._storage.printStats();
    }

    async start(callback) {
        callback(null, await this.startAsync());
    }

    async writeRecord(record, callback) {
        callback(null, await this.writeRecordAsync(record));
        // return this.writeRecordAsync(record).nodeify(callback);
    }

    async readRecord(offset, callback) {
        callback(null, await this.readRecordAsync(offset));
    }

    async startAsync() {
        await this._storage.addFileAsync("0", this._logFileSize);
        return this;
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

    async _increaseOffset(amount) {
        const newOffset = this._currentOffset + amount;
        const newFile = this._fileIdForOffset(newOffset);
        if (newFile === this._fileIdForOffset(this._currentOffset)) {
            this._currentOffset += amount;
        } else {
            this.flush();
            await this._storage.addFileAsync(newFile.toString(), this._logFileSize)
            this._currentOffset += amount
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
