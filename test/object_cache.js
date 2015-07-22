const assert = require("assert");
const ObjectCache = require("../lib/object_cache");

describe("ObjectCache", () => {
    it("should contain freshly put value", () => {
        const cache = new ObjectCache(2);
        cache.put("foo", 92);
        assert(cache.contains("foo"));
        assert.equal(cache.get("foo"), 92);
    });

    it("should pull out old entries", () => {
        const cache = new ObjectCache(2);
        cache.put("foo", 92);
        cache.put("bar", 44);

        assert.equal(cache.get("bar"), 44);
        assert.equal(cache.get("foo"), null);
        assert(!cache.contains("foo"));
    });

    it("should keep protected values", () => {
        const cache = new ObjectCache(2);
        cache.put("foo", 92);
        assert.equal(cache.get("foo"), 92);

        for (let i = 0; i < 10; i++) {
            cache.put("bar" + i, i);
        }

        assert(cache.contains("foo"));
    });

    it("should remove values in lru order", () => {
        const cache = new ObjectCache(6);
        for (let i = 0; i < 10; i++) {
            cache.put("foo" + i, i);
        }
        for (let i = 0; i < 7; i++) {
            assert(!cache.contains("foo" + i));
        }
        for (let i = 7; i < 10; i++) {
            assert(cache.contains("foo" + i));
        }
    });

    it("should spill entries form protected back to probation", () => {
        const cache = new ObjectCache(6);
        for (let i = 0; i < 6; i++) {
            cache.put("foo" + i, i);
            cache.get("foo" + i);
        }

        for (let i = 0; i < 6; i++) {
            assert.equal(cache.get("foo" + i), i);
        }
    });
});