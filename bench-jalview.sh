for i in 128 256 512 1024 2048 4096 8192; do
  echo "TESTING $i"
  hyperfine -i --export-json "$i"_"$i".json --runs 3 "yarn tsx bench/jalview.ts 'https://www.jalview.org/jalview-js/JalviewJS.shtml/?open%20https://www.jbrowse.org/demos/msabench/"$i"_"$i".fa'"
  echo -e "\n\n\n\n\n"
done;
