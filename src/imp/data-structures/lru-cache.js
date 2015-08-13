const Immutable = require("immutable");
const mori = require("mori");
const {assert} = require("imp/contracts");


class LruImmutable {
    static new(capacity) {
        return new LruImmutable(capacity, new Immutable.OrderedMap());
    }

    get(key) {
        const value = this._map.get(key);
        if (value === undefined) {
            return [undefined, this];
        }
        return [value, this._swap(key, key, value)];
    }

    peek(key) {
        return this._map.get(key);
    }

    put(key, value) {
        if (this._map.size < this.capacity || this._map.has(key)) {
            return [undefined, this._update({map: this._map.set(key, value)})];
        }
        let spilled;
        // the fastest way to fetch fisrt [key, value] pair
        for (spilled of this._map) {
            break;
        }
        return [spilled, this._swap(spilled[0], key, value)];
    }

    has(key) {
        return this._map.has(key);
    }

    delete(key) {
        const value = this._map.get(key);
        return [value, this._update({map: this._map.delete(key)})];
    }

    _swap(outKey, inKey, value) {
        return this._update({
            map: this._map.delete(outKey).set(inKey, value)
        });
    }

    _update({map}) {
        return new LruImmutable(this.capacity, map);
    }

    [Symbol.iterator]() {
        return this._map[Symbol.iterator]();
    }

    constructor(capacity, map) {
        assert(map.size <= capacity, "cache overflowed capacity");
        this.capacity = capacity;
        this._map = map;
    }
}


class LruMori {
    static new(capacity) {
        return new LruMori(capacity, mori.hashMap(), mori.sortedSet(), 0);
    }

    get size() {
        return mori.count(this._keyToEntry);
    }

    get(key) {
        const entry = mori.get(this._keyToEntry, key);
        if (entry === null) {
            return [undefined, this];
        }
        const [, value] = mori.nth(entry, 1);
        const [, newCache] = this.put(key, value);
        return [value, newCache];
    }

    peek(key) {
        const entry = mori.get(this._keyToEntry, key);
        if (entry === null) {
            return undefined;
        }
        const [, value] = mori.nth(entry, 1);
        return value;
    }

    put(key, value) {
        const entry = mori.vector(this._nextIndex, [key, value]);
        const nextIndex = this._nextIndex + 1;

        let keyToEntry = this._keyToEntry;
        let entries = this._entries;
        let spilled;

        if (this.has(key)) {
            entries = mori.disj(entries, mori.get(this._keyToEntry, key));
        } else if (this.size >= this.capacity) {
            const spilledEntry = mori.first(this._entries);
            spilled = mori.nth(spilledEntry, 1);
            keyToEntry = mori.dissoc(keyToEntry, spilled[0]);
            entries = mori.disj(entries, spilledEntry);
        }

        keyToEntry = mori.assoc(keyToEntry, key, entry);
        entries = mori.conj(entries, entry);
        return [spilled, this._update({keyToEntry, entries, nextIndex})];
    }

    has(key) {
        return mori.hasKey(this._keyToEntry, key);
    }

    delete(key) {
        const entry = mori.get(this._keyToEntry, key);
        if (entry === null) {
            return [undefined, this];
        }
        const [, value] = mori.nth(entry, 1);
        const keyToEntry = mori.dissoc(this._keyToEntry, key);
        const entries = mori.disj(this._entries, entry);
        return [value, this._update({keyToEntry, entries,
                                     nextIndex: this._nextIndex})];
    }

    _update({keyToEntry, entries, nextIndex}) {
        return new LruMori(this.capacity, keyToEntry, entries, nextIndex);
    }

    [Symbol.iterator]() {
        return mori.toJs(this._entries).map(([, kv]) => kv)[Symbol.iterator]();
    }

    constructor(capacity, keyToEntry, entries, nextIndex) {
        assert(mori.count(keyToEntry) <= capacity, "cache overflowed capacity");
        assert(mori.count(keyToEntry) === mori.count(entries),
               "collections should be synchronized");
        this.capacity = capacity;
        this._keyToEntry = keyToEntry;
        this._entries = entries;
        this._nextIndex = nextIndex;
    }
}

module.exports = {LruMori, LruImmutable,
                  LruCache: LruImmutable};
