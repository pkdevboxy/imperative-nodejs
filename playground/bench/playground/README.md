Compile:

`lein cljsbuild once bench`

Launch:

`node out/bench.js option1 arg1 option1 arg2`

Global options are:

  * `once true` --- to run each benchmark only once (useful for log running
    benchmarks)


Benchmark specific options are:

  * `log-size 100` --- total log size in megabytes
  * `log-file-size 5` --- log file size in megabytes
  * `record-size 1000` --- maximal record length in bytes
  * `dir "/tmp/bench"` --- directory to create log at. It must be created
    manually.
  * `report-write-time` --- report average times for writing one record
