"use strict";
const Promise = require("bluebird");
const path = require("path");
const fs = Promise.promisifyAll(require("fs"));


function zeroBuffer(size) {
    const buf = new Buffer(size);
    buf.fill(0);
    return buf;
}


function readCString(buffer) {
    for (let i = 0; i < buffer.length; i++) {
        if (buffer[i] === 0) {
            return buffer.slice(0, i);
        }
    }
    return buffer;
}


class CachingFileStorage {
    constructor(path) {
        this._path = path;
        this._cache = new Map();
        this._dirty = new Set();
        this._stats = {
            bytesWritten: 0,
            bytesRead: 0
        };
    }

    printStats() {
        const mb = 1024 * 1024;
        console.log(`Mb written ${this._stats.bytesWritten / mb}`);
        console.log(`Mb read ${this._stats.bytesRead / mb}`);
    }

    async addFileAsync(name, size) {
        this._cache.set(name, zeroBuffer(size));
        this._dirty.add(name);
    }

    async writeToFileAsync(name, buffer, offset) {
        const target = this._cache.get(name);
        if (!target) {
            throw new Error("Not supported yet");
        }
        this._dirty.add(name);
        buffer.copy(target, offset);
        this._stats.bytesWritten += buffer.length;
    }

    async readCStringFromFileAsync(name, offset) {
        let buffer = await this._readToCacheAsync(name)
        return  readCString(buffer.slice(offset));
    }

    flush() {
        this._dirty.forEach((name) => {
            fs.writeFileAsync(this._pathToFile(name), this._cache.get(name))
                .then(() => this._dirty.delete(name))
                .catch(() => "ignore");
        });
    }

    async _readToCacheAsync(name) {
        const result = this._cache.get(name);
        if (result) {
            return result;
        }

        const buffer = await fs.readFileAsync(this._pathToFile(name))
        this._cache.set(name, buffer)
        return buffer
    }

    _pathToFile(name) {
        return path.join(this._path, name);
    }
}

module.exports = CachingFileStorage;
