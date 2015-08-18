const {go} = require("imp/async");

const benchmarkSets = [
    ["Log", require("./log")],
    ["Data structures", require("./data-structures")]
];


go(function* (){
    for (const [suiteName, benchmarks] of benchmarkSets) {
        console.log(`\nSuite: ${suiteName}`);

        for (const bench of Object.keys(benchmarks)) {
            console.log();
            console.log(bench);
            yield Promise.resolve(benchmarks[bench]());
        }
    }
});
