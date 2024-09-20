for i in 128 256 512 1024 2048 4096 8192 16384; do
  echo "TESTING $i"
  hyperfine -i --export-json json/jalview-"$i"_"$i".json --runs 5 "yarn tsx bench/jalview.ts 'https://www.jalview.org/jalview-js/JalviewJS.shtml/?open%20https://www.jbrowse.org/demos/msabench/"$i"_"$i".fa'"
  echo -e "\n\n\n\n\n"
done;
