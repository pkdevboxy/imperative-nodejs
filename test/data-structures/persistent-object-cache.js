const assert = require("assert");
const {PersistentObjectCache} = require("imp/data-structures");

describe("PersistentObjectCache", () => {
    it("should spill stale values", () => {
        const cache = PersistentObjectCache.new({capacity: 4});
        cache.put("Eclipse", "An IDE");
        cache.put("IDEA", "good");
        cache.put("IDEA 4.5", "better");

        assert.strictEqual(cache.get("Eclipse"), undefined);
        assert.equal(cache.get("IDEA 4.5"), "better");
        assert.equal(cache.get("IDEA"), "good");

        cache.put("IDEA 5.0", "perfect");
        cache.put("IDEA 6.0", "ideal");
        assert.equal(cache.peek("IDEA 6.0"), "ideal");
        assert.equal(cache.peek("IDEA 5.0"), "perfect");
        assert.equal(cache.peek("IDEA 4.5"), "better");
        assert.equal(cache.peek("IDEA"), "good");
    });

    it("should implement iterator protocol", () => {
        const cache = PersistentObjectCache.new({capacity: 4});
        cache.put("Eclipse", "An IDE");
        cache.put("IDEA", "good IDEA");
        cache.put("IDEA 4.5", "better IDEA");

        assert.equal(cache.get("IDEA 4.5"), "better IDEA");
        assert.equal(cache.get("IDEA"), "good IDEA");

        cache.put("IDEA 5.0", "perfect IDEA");
        cache.put("IDEA 6.0", "IDEAL");
        const values = new Set();
        for (const [, value] of cache) {
            values.add(value);
        }

        assert.strictEqual(cache.get("Eclipse"), undefined);
        assert(!values.has("An IDE"));

        assert(values.has("good IDEA"));
        assert(values.has("better IDEA"));
        assert(values.has("perfect IDEA"));
        assert(values.has("IDEAL"));
    });

    it("should produce independent snapshots", () => {
        const cache = PersistentObjectCache.new({capacity: 4});
        cache.put("IDEA", "good IDEA");
        cache.put("NetBeans", "bad IDEA");

        const copy = cache.getSnapshot();
        assert.equal(copy.get("IDEA"), "good IDEA");
        copy.put("Eclipse", "An IDE");

        assert.strictEqual(cache.get("Eclipse"), undefined);
        assert.equal(cache.get("NetBeans"), "bad IDEA");
        assert.equal(copy.get("IDEA"), "good IDEA");

        assert(copy.delete("NetBeans"));

        assert.strictEqual(copy.get("NetBeans"), undefined);
        assert.equal(cache.get("NetBeans"), "bad IDEA");
    });
});
