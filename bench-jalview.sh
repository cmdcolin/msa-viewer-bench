#for i in {128,256,512,1024,2048,4096,8192}; do
for i in {128}; do
  echo "TESTING $i"
  yarn bench-jalview https://www.jalview.org/jalview-js/JalviewJS.shtml/?open%20https://www.jbrowse.org/demos/msabench/$i_$i.fa
done;
