"use strict";
var Promise = require("bluebird");
var path = require("path");
var fs = Promise.promisifyAll(require("fs"));


function zeroBuffer(size) {
    var buf = new Buffer(size);
    buf.fill(0);
    return buf;
}


function readCString(buffer) {
    for (var i = 0; i < buffer.length; i++) {
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
        var mb = 1024 * 1024;
        console.log(`Mb written ${this._stats.bytesWritten / mb}`);
        console.log(`Mb read ${this._stats.bytesRead / mb}`);
    }

    addFileAsync(name, size) {
        this._cache.set(name, zeroBuffer(size));
        this._dirty.add(name);
        return Promise.resolve();
    }

    writeToFileAsync(name, buffer, offset) {
        var target = this._cache.get(name);
        if (!target) {
            throw new Error("Not supported yet");
        }
        this._dirty.add(name);
        buffer.copy(target, offset);
        this._stats.bytesWritten += buffer.length;
        return Promise.resolve();
    }

    readCStringFromFileAsync(name, offset) {
        return this._readToCacheAsync(name)
            .then((buffer) => readCString(buffer.slice(offset)));
    }

    flush() {
        this._dirty.forEach((name) => {
            fs.writeFileAsync(this._pathToFile(name), this._cache.get(name))
                .then(() => this._dirty.delete(name))
                .catch(() => "ignore");
        });
    }

    _readToCacheAsync(name) {
        var result = this._cache.get(name);
        if (result) {
            return Promise.resolve(result);
        }

        return fs.readFileAsync(this._pathToFile(name))
            .then((buffer) => {
                this._cache.set(name, buffer);
                return buffer;
            });
    }

    _pathToFile(name) {
        return path.join(this._path, name);
    }
}

module.exports = CachingFileStorage;
