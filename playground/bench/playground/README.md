Compile:

From `imperative_nodejs/playground` directory:

```
lein npm install
lein cljsbuild once bench
```

Launch:

`node --harmony-generators out/bench.js` or `iojs out/bench.js`. iojs is noticeably
faster.

To select particular benchmark, use `iojs out/bench readWrite` or `iojs out/bench multyReadWrite`
