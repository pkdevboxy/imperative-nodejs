const {contract} = require("imp/contracts");
const {LruCache} = require("./lru-cache");


module.exports = class PersistentObjectCache {
    static new({capacity=1024, secondGenSizeRatio=0.5,
                lruCache = LruCache} = {}) {
        const state = GenCache.new({capacity, secondGenSizeRatio, lruCache});
        return new PersistentObjectCache(state);
    }

    get size() {
        return this._state.size;
    }

    get(key) {
        contract("key should not be null", key != null);

        const [result, newState] = this._state.get(key);
        this._state = newState;
        return result;
    }

    peek(key) {
        contract("key should not be null", key != null);

        return this._state.peek(key);
    }

    set(key, value) {
        contract("key should not be null", key != null);
        contract("value should not be null", value != null);

        this._state = this._state.set(key, value);
        return this;
    }

    getSnapshot() {
        return new PersistentObjectCache(this._state);
    }

    delete(key) {
        contract("key should not be null", key != null);

        const [result, newState] = this._state.delete(key);
        this._state = newState;
        return result;
    }

    [Symbol.iterator]() {
        return this._state[Symbol.iterator]();
    }

    constructor(state) {
        this._state = state;
    }
};


class GenCache {
    static new({capacity, secondGenSizeRatio, lruCache}) {
        const secondSize = Math.round(capacity * secondGenSizeRatio);
        const firstSize = capacity - secondSize;
        contract("Both generations should be not empty",
                 firstSize > 0 && secondSize > 0);

        return new GenCache(
            lruCache.new(firstSize),
            lruCache.new(secondSize)
        );
    }

    get size() {
        return this._firstGeneration.map.size + this._secondGeneration.map.size;
    }

    get(key) {
        let firstGeneration = this._firstGeneration;
        let secondGeneration = this._secondGeneration;
        let value;

        [value, secondGeneration] = secondGeneration.get(key);
        if (value === undefined) {
            [value, firstGeneration] = firstGeneration.delete(key);
            if (value !== undefined) {
                let spilled;
                [spilled, secondGeneration] = secondGeneration.set(key, value);
                if (spilled !== undefined) {
                    [, firstGeneration] = firstGeneration.set(...spilled);
                }
            }
        }
        const state = new GenCache(firstGeneration, secondGeneration);
        return [value, state];
    }

    peek(key) {
        const result = this._secondGeneration.peek(key);
        return result !== undefined
            ? result
            : this._firstGeneration.peek(key);
    }

    set(key, value) {
        if (this._secondGeneration.has(key)) {
            return new GenCache(this._firstGeneration,
                                this._secondGeneration.set(key, value)[1]);
        }
        const [, firstGeneration] = this._firstGeneration.set(key, value);
        return new GenCache(firstGeneration, this._secondGeneration);
    }

    delete(key) {
        const [value1, firstGeneration] = this._firstGeneration.delete(key);
        const [value2, secondGeneration] = this._secondGeneration.delete(key);
        return [value1 !== undefined || value2 !== undefined,
                new GenCache(firstGeneration, secondGeneration)];
    }

    * [Symbol.iterator]() {
        yield* this._firstGeneration;
        yield* this._secondGeneration;
    }


    constructor(firstGeneration, secondGeneration) {
        this._firstGeneration = firstGeneration;
        this._secondGeneration = secondGeneration;
    }
}
