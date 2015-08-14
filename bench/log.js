const assert = require("assert");
const tmp = require("tmp");
const _ = require("lodash");
const {go} = require("imp/async");
const Log = require("imp/log");


function random_text(preffix="", length=1000) {
    const bla = " bla-bla-bla";
    const suffix = bla.repeat(length / bla.length);
    return new Buffer(preffix + suffix);
}


const [READ, WRITE] = ["READ", "WRITE"];

function makeRequests(nRequests=1000000, writeRatio=0.1,
                       garbadgeRatio=0.2, workSetSize=1000) {
    function makeRequest(offset) {
        return Math.random() < writeRatio
            ? {type: WRITE, text: random_text()}
            : {type: READ, offset};
    }

    const nGarbadgeRequests = Math.round(nRequests * garbadgeRatio);
    const nWorkRequests = nRequests - nGarbadgeRequests;

    const workSetKeys = _.range(workSetSize);
    const garbadgeKeys = _.range(workSetSize, 3 * workSetSize);

    const initialData = [];
    workSetKeys.forEach(() => {
        initialData.push(random_text("work set"));
    });

    garbadgeKeys.forEach(() => {
        initialData.push(random_text("grabadge"));
    });


    const requests = [];
    _.range(nWorkRequests).forEach(() => {
        const key = _.sample(workSetKeys);
        requests.push(makeRequest(key));
    });

    _.range(nGarbadgeRequests).forEach(() => {
        const key = _.sample(garbadgeKeys);
        requests.push(makeRequest(key));
    });

    _.shuffle(requests);

    return {
        initialData,
        requests
    };
}


function benchmark(log, {initialData, requests}) {
    const tag = "Log";
    return go(function* () {
        log = yield log;
        const offsets = [];
        const data = new Map();
        for (const text of initialData) {
            const off = yield log.addRecord(text);
            offsets.push(off);
            data.set(off, text);
        }

        yield log.flush();
        console.log("Starting");
        let written = 0;
        let read = 0;


        console.time(tag);
        for (const {type, text, offset} of requests) {
            if (type === READ) {
                const off = offsets[offset];
                const record = yield log.fetchRecord(off);
                read += record.length;
                assert(record.equals(data.get(off)));
            } else {
                const off = yield log.addRecord(text);
                offsets.push(off);
                data.set(off, text);
                written += text.length;
            }
        }
        yield log.stop();
        console.timeEnd(tag);
        const mb = 1024 * 1024;
        written = Math.round(written / mb);
        read = Math.round(read / mb);
        console.log(`written: ${written} MB\nread   : ${read} MB`);
    });
}

const fixture = makeRequests();

module.exports = {
    Log() {
        const config = {
            databaseDir: tmp.dirSync().name,
            logFileSize: 0.5 * 1024 * 1024,
            cacheSize: 2200
        };
        const log = Log.start(config);
        benchmark(log, fixture);
    }
};
