const Promise = require("bluebird");
const {contract} = require("imp/contracts");


class RcFd {
    static new(fd, closeFd) {
        return new RcFd(fd, closeFd);
    }

    get fd() {
        contract("should not access dead descriptors", this._refCount > 0);
        return this._fd;
    }

    clone() {
        contract("should not clone dead descriptors", this._refCount > 0);
        this._refCount += 1;
        return this;
    }

    dispose() {
        contract("should not dispose dead descriptors", this._refCount > 0);
        this._refCount -= 1;
        if (this._refCount === 0) {
            this._closeFd(this._fd);
        }
    }

    constructor(fd, closeFd) {
        this._fd = fd;
        this._closeFd = closeFd;
        this._refCount = 1;
    }
}


class FileDescriptorStorage {
    static new({cacheFactory, cacheOptions, fs, flags="r+", onCloseError=null}) {
        contract("fs should be promisified", "openAsync" in fs);

        onCloseError = onCloseError || function (error) {
                throw error;
            };

        cacheOptions.onRemoval = (key, rcfd) => {
            rcfd.dispose();
        };


        const open = (path) => fs.openAsync(path, flags);
        const close = (fd) => fs.closeAsync(fd).catch(onCloseError);

        const cache = cacheFactory(cacheOptions);

        return new FileDescriptorStorage(cache, open, close, onCloseError);
    }

    open(path) {
        const rcfd = this._cache.get(path);
        if (rcfd) {
            return Promise.resolve(rcfd.clone());
        }

        return this._open(path)
            .then((fd) => {
                const rcfd = RcFd.new(fd, this._close);
                this._cache.put(path, rcfd);
                return rcfd.clone();
            });
    }

    constructor(cache, open, close) {
        this._cache = cache;
        this._open = open;
        this._close = close;
    }
}


module.exports = FileDescriptorStorage;
