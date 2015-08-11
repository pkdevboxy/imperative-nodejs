const {contract} = require("imp/contracts");

module.exports = class ObjectCache {
    /**
     * Creates a new ObjectCache.
     *
     * @param {number} size Total size of the cache.
     * @param {number} probationRatio Proportion of probation (first generation) entries.
     * @param {function} onRemoval Hook (key, value) => () which is called when an entry is removed from the cache.
     */
    static new({size=1024, probationRatio=0.5, onRemoval=()=>{}} = {}) {
        contract("size should be at least one", size >= 1);
        contract("probation ratio should be in (0; 1]",
            probationRatio > 0 && probationRatio <= 1);

        const probationCapacity = Math.ceil(size * probationRatio);
        const protectedCapacity = size - probationCapacity;

        const probationMap = BoundedMap.new(probationCapacity);
        const protectedMap = BoundedMap.new(protectedCapacity);

        return new ObjectCache(probationMap, protectedMap, onRemoval);
    }

    /**
     * Fetches value from cache.
     * @param key
     * @returns Value if key is present in the cache, else undefined
     */
    get(key) {
        let value = this._protected.get(key);
        if (value !== undefined) {
            this._protected.remove(key);
            this._protected.put(key, value);
            return value;
        }

        value = this._probation.get(key);
        if (value !== undefined) {
            this._probation.remove(key);

            const pulledOut = this._protected.put(key, value);
            if (pulledOut !== null) {
                this._probation.put(pulledOut[0], pulledOut[1]);
            }

            return value;
        }

        return undefined;
    }

    /**
     * Puts key, value into the cache. Removes some entry from cache if it is full.
     * If key is present, it is promoted to protected (second generation) entries.
     * @param key Must not be null or undefined
     * @param value
     */
    put(key, value) {
        contract("value should not be null",
            value !== undefined && value !== null);
        if (this._protected.contains(key)) {
            return;
        }
        const pullOut = this._probation.put(key, value);
        if (pullOut !== null) {
            this._onRemoval(...pullOut);
        }
    }

    /**
     * Removes key from cache
     * @param key
     * @returns {boolean} Was the key present?
     */
    remove(key) {
        for (const map of [this._protected, this._probation]) {
            if (map.contains(key)) {
                const value = map.get(key);
                map.remove(key);
                this._onRemoval(key, value);
                return true;
            }
        }
        return false;
    }

    /**
     * Is the key in the cache? Does not modify the cache.
     * @param key
     * @returns {boolean}
     */
    contains(key) {
        return this._protected.contains(key) || this._probation.contains(key);
    }

    [Symbol.iterator]() {
        const probationIter = this._probation[Symbol.iterator]();
        const protectedIter = this._protected[Symbol.iterator]();
        return (function*() {
            yield* probationIter;
            yield* protectedIter;
        })();
    }

    constructor(probationMap, protectedMap, onRemoval) {
        this._probation = probationMap;
        this._protected = protectedMap;
        this._onRemoval = onRemoval;
    }
};

class BoundedMap {
    static new(capacity) {
        contract("capacity should be at least one", capacity >= 1);
        return new BoundedMap(capacity);
    }

    get(key) {
        return this._map.get(key);
    }

    put(key, value) {
        let pullOut = null;
        if (!(this._map.size < this._capacity)) {
            pullOut = this._map.entries().next().value;
            this._map.delete(pullOut[0]);
        }
        this._map.set(key, value);
        return pullOut;
    }

    remove(key) {
        this._map.delete(key);
    }

    contains(key) {
        return this._map.has(key);
    }

    [Symbol.iterator]() {
        return this._map[Symbol.iterator]();
    }

    constructor(capacity) {
        this._map = new Map();
        this._capacity = capacity;
    }
}
