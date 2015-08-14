const assert = require("assert");
const {ObjectCache} = require("imp/data-structures");


describe("ObjectCache", () => {
    it("should contain freshly put value", () => {
        const cache = ObjectCache.new({size: 2});
        cache.set("foo", 92);
        assert(cache.contains("foo"));
        assert.equal(cache.get("foo"), 92);
    });

    it("should pull out old entries", () => {
        const cache = ObjectCache.new({size: 2});
        cache.set("foo", 92);
        cache.set("bar", 44);

        assert.equal(cache.get("bar"), 44);
        assert.equal(cache.get("foo"), null);
        assert(!cache.contains("foo"));
    });

    it("should keep protected values", () => {
        const cache = ObjectCache.new({size: 2});
        cache.set("foo", 92);
        assert.equal(cache.get("foo"), 92);

        for (let i = 0; i < 10; i++) {
            cache.set("bar" + i, i);
        }

        assert(cache.contains("foo"));
    });

    it("should remove values in lru order", () => {
        const cache = ObjectCache.new({size: 6});
        for (let i = 0; i < 10; i++) {
            cache.set("foo" + i, i);
        }
        for (let i = 0; i < 7; i++) {
            assert(!cache.contains("foo" + i));
        }
        for (let i = 7; i < 10; i++) {
            assert(cache.contains("foo" + i));
        }
    });

    it("should spill entries form protected back to probation", () => {
        const cache = ObjectCache.new({size: 6});
        for (let i = 0; i < 6; i++) {
            cache.set("foo" + i, i);
            cache.get("foo" + i);
        }

        for (let i = 0; i < 6; i++) {
            assert.equal(cache.get("foo" + i), i);
        }
    });

    it("should call remove hook when entry is manually removed", () => {
        let called = false;
        const cache = ObjectCache.new({size: 2, onRemoval: (key, value) => {
            assert.equal(key, "foo");
            assert.equal(value, 92);
            assert(!called);
            called = true;
        }});

        cache.set("foo", 92);
        assert(cache.remove("foo"));
        assert(called);
    });

    it("should call remove hook when entry is purged", () => {
        let called = false;
        const cache = ObjectCache.new({size: 2, onRemoval: (key, value) => {
            assert.equal(key, "foo");
            assert.equal(value, 92);
            assert(!called);
            called = true;
        }});

        cache.set("foo", 92);
        cache.set("bar", 42);
        assert(called);
    });

    it("should be iterable", () => {
        const cache = ObjectCache.new({size: 2});
        cache.set("foo", 92);
        cache.get("foo");
        cache.set("bar", 42);
        for (const [key, value] of cache) {
            //noinspection JSUnusedAssignment
            assert((key === "foo" && value === 92) ||
                (key === "bar" && value === 42));
        }
    });

    it("should not allow duplicate keys", () => {
        const cache = ObjectCache.new({size: 2});
        cache.set("foo", 92);
        cache.get("foo");
        cache.set("foo", 42);
        const items = [];
        for (const i of cache) {
            items.push(i);
        }
        assert.equal(items.length, 1);
    });
});
