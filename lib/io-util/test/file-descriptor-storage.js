const Promise = require("bluebird");
const assert = require("assert");
const mockFs = require("mock-fs");
const {FileDescriptorStorage} = require("imp/io-util");


let fs = null;
let cache = null;

//noinspection FunctionWithInconsistentReturnsJS
beforeEach(() => {
    fs = Promise.promisifyAll(mockFs.fs({
        "foo": "some text"
    }));
    let item = [null, null];

    cache = {
        get(key) {
            return item[0] === key ? item[1] : undefined;
        },
        put(key, value) {
            //noinspection JSUnusedAssignment
            item = [key, value];
        }
    };
});

describe("FileDescriptorStorage", () =>
    it("should be able to open a file", () => {
        const storage = FileDescriptorStorage.new({
            cacheFactory: ()=> cache,
            cacheOptions: {},
            fs
        });

        storage.open("foo")
            .then((rcfd) => {
                assert(rcfd.fd > 0);
                assert(rcfd._refCount === 2);
            });
    })
);
