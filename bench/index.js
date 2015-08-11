const benchmarks = require("./data-structures");

for (const bench of Object.keys(benchmarks)) {
    console.log("\n\n");
    console.log(bench);
    benchmarks[bench]();
}
