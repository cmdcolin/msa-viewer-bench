for i in 128 256 512 1024 2048 4096 8192 16384; do
  echo "TESTING $i"
  hyperfine -i --export-json json/wasabi-"$i"_"$i".json --runs 10 "yarn tsx bench/wasabi.ts 'http://was.bi/userID?url=https://jbrowse.org/demos/msabench/"$i"_"$i".fa'"
  echo -e "\n\n\n\n\n"
done;
