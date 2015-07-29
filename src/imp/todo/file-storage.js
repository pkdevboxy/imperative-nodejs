const Promise = require("bluebird");
const path = require("path");
const fs = Promise.promisifyAll(require("fs"));

module.exports = class FileStorage {
    static new(databaseDir) {
        return new FileStorage(databaseDir);
    }

    addFile(name, size) {
        this._cache.set(name, zeroBuffer(size));
        this._dirty.add(name);
        return Promise.resolve();
    }

    writeToFile(name, buffer, offset) {
        return this._readToCache(name).then(target => {
            this._dirty.add(name);
            buffer.copy(target, offset);
        });
    }

    readFromFile(name, offset) {
        return this._readToCache(name)
            .then((buffer) => readCString(buffer.slice(offset)));
    }

    listFiles() {
        return fs.readdirAsync(this._path);
    }

    flush() {
        return Promise.all([...this._dirty].map(name => {
            return fs.writeFileAsync(this._pathToFile(name), this._cache.get(name))
                .then(() => {
                    this._dirty.delete(name);
                });
        }));
    }

    constructor(databaseDir) {
        this._path = databaseDir;
        this._cache = new Map();
        this._dirty = new Set();
    }

    _readToCache(name) {
        const result = this._cache.get(name);
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
};


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
