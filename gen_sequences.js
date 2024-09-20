import fs from "fs";
const letters = [
  "A",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "Y",
];
function gen(M, N, str) {
  for (let i = 0; i < M; i++) {
    const id = `>seq${i}`;
    let seq = "";
    for (let i = 0; i < N; i++) {
      seq += letters[Math.floor(Math.random() * letters.length)];
    }
    str.write(`${id}\n${seq}\n`);
  }
}

fs.mkdirSync("out", { recursive: true });
for (let i = 128; i < 50_000; i *= 2) {
  const str = fs.createWriteStream(`out/${i}_${i}.fa`);
  gen(i, i, str);
  str.end();
}
