const benchmarks = require("./log");

for (const bench of Object.keys(benchmarks)) {
    console.log("\n\n");
    console.log(bench);
    benchmarks[bench]();
}
