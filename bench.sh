#!/bin/bash

for file in out/*.fa; do
  F=$(basename $file)
  echo "TESTING $F"

  hyperfine -i --export-json json/jalview-$F.json --runs 10 --warmup 3 "node bench/jalview.ts 'https://www.jalview.org/jalview-js/JalviewJS.shtml/?open%20https://www.jbrowse.org/demos/msabench/$F"

  hyperfine -i --export-json json/reactmsaview-$F.json --runs 10 --warmup 3 "node bench/reactmsaview.ts 'https://gmod.org/react-msaview/?data={\"msaview\":{\"msaFilehandle\":{\"uri\":\"https://jbrowse.org/demos/msabench/$F\"}}}'"

  hyperfine -i --export-json json/wasabi-$F.json --runs 10 --warmup 3 "node bench/wasabi.ts 'http://was.bi/userID?url=https://jbrowse.org/demos/msabench/$F'"

  hyperfine -i --export-json json/biojsmsa-$F.json --runs 10 --warmup 3 "node bench/biojsmsa.ts 'https://jbrowse.org/demos/msabench-biojs/?size=$i'"
  echo -e "\n\n\n\n\n"
done
