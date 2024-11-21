for i in 128 256 512 1024 2048 4096 8192 16384; do
  echo "TESTING $i"
  hyperfine -i --export-json json/biojsmsa-"$i"_"$i".json --runs 10 "yarn tsx bench/biojsmsa.ts 'https://jbrowse.org/demos/msabench-biojs/?size=$i'"
  echo -e "\n\n\n\n\n"
done;
