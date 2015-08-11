const _ = require("lodash");
const {PersistentObjectCache, ObjectCache} = require("imp/data-structures");

const [READ, WRITE] = ["READ", "WRITE"];

function makeRequests(nRequests=1000000, writeRatio=0.1,
                       garbadgeRatio=0.2, workSetSize=2048) {
    function makeRequest(key, data) {
        return Math.random() < writeRatio
            ? {type: WRITE, key, data: `${data}: write ${key}`}
            : {type: READ, key};
    }

    const nGarbadgeRequests = Math.round(nRequests * garbadgeRatio);
    const nWorkRequests = nRequests - nGarbadgeRequests;

    const workSetKeys = _.range(workSetSize);
    const garbadgeKeys = _.range(nGarbadgeRequests).map(x => "grabadge " + x);

    const initialData = new Map();
    for (const key of workSetKeys) {
        initialData.set(key, `initial value for ${key}`);
    }

    for (const key of garbadgeKeys) {
        initialData.set(key, `initial value for ${key}`);
    }

    const requests = [];
    for (const i of _.range(nWorkRequests)) {
        const key = _.sample(workSetKeys);
        requests.push(makeRequest(key, i));
    }

    for (const key of garbadgeKeys) {
        requests.push(makeRequest(key));
    }

    _.shuffle(requests);

    return {
        initialData,
        requests
    };
}

function benchmark(cache, {initialData, requests}) {
    let totalWork = 0;
    let hits = 0;
    let misses = 0;
    function doWork() {
        let sum = 0;
        _.range(100).forEach(() => sum += Math.random());
        totalWork += sum;
    }

    const state = new Map(initialData);
    const store = {
        get(key) {
            const hit = cache.get(key);
            if (hit) {
                hits += 1;
                return hit;
            }
            misses += 1;
            doWork();
            const value = state.get(key);
            cache.put(key, value);
            return value;
        },

        put(key, value) {
            doWork();
            cache.put(key, value);
            state.set(key, value);
        }
    };

    const tag = `${requests.length} requests`;
    console.time(tag);
    for (const {type, key, data} of requests) {
        if (type === READ) {
            store.get(key);
        } else {
            store.put(key, data);
        }
    }
    console.timeEnd(tag);
    console.log(`hit rate ${hits / misses}`);
}

const fixture = makeRequests();

module.exports = {
    ObjectCache() {
        const cache = ObjectCache.new();
        benchmark(cache, fixture);
    },
    PersistentObjectCache() {
        const cache = PersistentObjectCache.new();
        benchmark(cache, fixture);
    }
};
