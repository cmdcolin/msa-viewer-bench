#!/bin/bash

ITERS=5
WARMUP=1

function bench() {

  hyperfine -i --export-json json/jalview-$1.json --runs $ITERS --warmup $WARMUP "node bench/jalview.ts 'https://www.jalview.org/jalview-js/JalviewJS.shtml/?open%20https://www.jbrowse.org/demos/msabench/$1'"

  hyperfine -i --export-json json/reactmsaview-$1.json --runs $ITERS --warmup $WARMUP "node bench/reactmsaview.ts 'https://gmod.org/react-msaview/?data={\"msaview\":{\"msaFilehandle\":{\"uri\":\"https://jbrowse.org/demos/msabench/$1\"}}}'"

  hyperfine -i --export-json json/wasabi-$1.json --runs $ITERS --warmup $WARMUP "node bench/wasabi.ts 'http://was.bi/userID?url=https://jbrowse.org/demos/msabench/$1'"

  hyperfine -i --export-json json/biojsmsa-$1.json --runs $ITERS --warmup $WARMUP "node bench/biojsmsa.ts 'https://jbrowse.org/demos/msabench-biojs/?file=https://jbrowse.org/demos/msabench/$1'"
}

for file in out/*.fa; do
  F=$(basename $file)
  echo "TESTING $F"
  bench $F
  echo -e "\n\n\n\n\n"
done
