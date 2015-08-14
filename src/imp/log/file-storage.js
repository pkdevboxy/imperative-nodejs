const Promise = require("bluebird");
const path = require("path");
const fs = Promise.promisifyAll(require("fs"));

/**
 * FileStorage is a collection of files in a single directory.
 *
 * @type {FileStorage}
 */
module.exports = class FileStorage {
    /**
     * Creates a new FileStorage
     *
     * @param databaseDir
     * @returns {FileStorage}
     */
    static new(databaseDir) {
        return new FileStorage(databaseDir);
    }

    /**
     * Adds a new file to the storage.
     *
     * @param {string} name file name
     * @param {int} size file size in bytes
     * @returns {Promise}
     */
    addFile(name, size) {
        return this.flush().then(() => {
            this._dirty = {name, buffer: zeroBuffer(size)};
        });
    }

    /**
     * Writes a buffer to the current file on the specified offset.
     *
     * @param {Buffer} buffer
     * @param {int} offset
     * @returns {Promise}
     */
    writeToFile(buffer, offset) {
        return Promise.resolve(buffer.copy(this._dirty.buffer, offset));
    }

    /**
     * Reads a file from the specified offset to the first zero byte.
     *
     * @param {string} name
     * @param {int} offset
     * @returns {Promise.<Buffer>}
     */
    readFile(name) {
        return this._isDirty(name)
            ? Promise.resolve(this._dirty.buffer)
            : fs.readFileAsync(this._pathToFile(name));
    }

    /**
     * Lists file names in this store.
     * Does not list cached files. It is most useful during startup.
     *
     * @returns {Promise.<[string]>}
     */
    listFiles() {
        return fs.readdirAsync(this._path);
    }


    /**
     * Flushes caches to disk. Two flushes should not be called simultaneously.
     * @returns {Promise}
     */
    flush() {
        return this._dirty == null
            ? Promise.resovle()
            : fs.writeFileAsync(this._pathToFile(this._dirty.name),
                                this._dirty.buffer);
    }

    constructor(databaseDir) {
        this._path = databaseDir;
        this._dirty = null;
    }

    _isDirty(name) {
        return this._dirty && this._dirty.name === name;
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
