const Immutable = require("immutable");
const {contract, assert} = require("imp/contracts");


module.exports = class PersistentObjectCache {
    static new({capacity=1024, secondGenSizeRatio=0.5} = {}) {
        const state = GenCache.new({capacity, secondGenSizeRatio});
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

    put(key, value) {
        contract("key should not be null", key != null);
        contract("value should not be null", value != null);

        this._state = this._state.put(key, value);
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
    static new({capacity, secondGenSizeRatio}) {
        const secondSize = Math.round(capacity * secondGenSizeRatio);
        const firstSize = capacity - secondSize;
        contract("Both generations should be not empty",
                 firstSize > 0 && secondSize > 0);

        return new GenCache(
            LruCache.new(firstSize, new Immutable.Map()),
            LruCache.new(secondSize, new Immutable.Map())
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
                [spilled, secondGeneration] = secondGeneration.put(key, value);
                if (spilled !== undefined) {
                    [, firstGeneration] = firstGeneration.put(...spilled);
                }
            }
        }
        const state = new GenCache(firstGeneration, secondGeneration);
        return [value, state];
    }

    peek(key) {
        const result = this._secondGeneration.map.get(key);
        return result !== undefined
            ? result
            : this._firstGeneration.map.get(key);
    }

    put(key, value) {
        if (this._secondGeneration.map.has(key)) {
            return new GenCache(this._firstGeneration,
                                this._secondGeneration.put(key, value)[1]);
        }
        const [, firstGeneration] = this._firstGeneration.put(key, value);
        return new GenCache(firstGeneration, this._secondGeneration);
    }

    delete(key) {
        const [value1, firstGeneration] = this._firstGeneration.delete(key);
        const [value2, secondGeneration] = this._secondGeneration.delete(key);
        return [value1 !== undefined || value2 !== undefined,
                new GenCache(firstGeneration, secondGeneration)];
    }

    * [Symbol.iterator]() {
        yield* this._firstGeneration.map;
        yield* this._secondGeneration.map;
    }


    constructor(firstGeneration, secondGeneration) {
        this._firstGeneration = firstGeneration;
        this._secondGeneration = secondGeneration;
    }
}

class LruCache {
    static new(capacity) {
        return new LruCache(capacity, new Immutable.OrderedMap());
    }

    get(key) {
        const value = this.map.get(key);
        if (value === undefined) {
            return [undefined, this];
        }
        return [value, this._swap(key, key, value)];
    }

    put(key, value) {
        if (this.map.size < this.capacity || this.map.has(key)) {
            return [undefined, this._update({map: this.map.set(key, value)})];
        }
        let spilled;
        // the fastest way to fetch fisrt [key, value] pair
        for (spilled of this.map) {
            break;
        }
        return [spilled, this._swap(spilled[0], key, value)];
    }

    delete(key) {
        const value = this.map.get(key);
        return [value, this._update({map: this.map.delete(key)})];
    }

    _swap(outKey, inKey, value) {
        return this._update({
            map: this.map.delete(outKey).set(inKey, value)
        });
    }

    _update({map}) {
        return new LruCache(this.capacity, map);
    }

    constructor(capacity, map) {
        assert(map.size <= capacity, "cache overflowed capacity");
        this.capacity = capacity;
        this.map = map;
    }
}
