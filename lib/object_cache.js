class BoundedMap {
    constructor(capacity) {
        console.assert(capacity >= 1);
        this._map = new Map();
        this._capacity = capacity;
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
}

class ObjectCache {
    constructor(size, probationRatio=0.5) {
        console.assert(size > 0);
        console.assert(probationRatio > 0 && probationRatio <= 1);

        const probationCapacity = Math.ceil(size * probationRatio);
        const protectedCapacity = size - probationCapacity;

        this._probation = new BoundedMap(probationCapacity);
        this._protected = new BoundedMap(protectedCapacity);
    }

    get(key) {
        let value = this._probation.get(key);
        if (value != null) {
            this._probation.remove(key);

            const pulledOut = this._protected.put(key, value);
            if (pulledOut != null) {
                this._probation.put(pulledOut[0], pulledOut[1]);
            }

            return value;
        }

        value = this._protected.get(key);
        if (value != null) {
            this._protected.remove(key);
            this._protected.put(key, value);
            return value;
        }

        return null;
    }

    put(key, value) {
        console.assert(value != null);
        this._probation.put(key, value);
    }

    contains(key) {
        return this._probation.contains(key) || this._protected.contains(key);
    }
}

module.exports = ObjectCache;
