Compile:

From `imperative_nodejs/playground` directory:


`lein npm install`

Dirty hack to convince lein coffeescript to use iced coffescript:

```
cd node_modules/coffee-script/bin/
mv coffee hot_coffee
ln -s ../../iced-coffee-script/bin/coffee coffee
cd -
```

```
lein coffeescript
lein cljsbuild once bench
```

Launch:

`node --harmony-generators out/bench.js` or `iojs out/bench`. iojs is noticeably
faster.

To select particular benchmark, use `iojs out/bench readWrite` or `iojs out/bench multyReadWrite`
