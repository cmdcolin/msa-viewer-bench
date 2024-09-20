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
function gen(M, N) {
  let out = "";
  for (let i = 0; i < M; i++) {
    const id = `>seq${i}`;
    let seq = "";
    for (let i = 0; i < N; i++) {
      seq += letters[Math.floor(Math.random() * letters.length)];
    }
    out += `${id}\n${seq}\n`;
  }
  return out;
}

fs.mkdirSync("out", { recursive: true });
for (let i = 128; i < 50_000; i *= 2) {
  fs.writeFileSync(`out/${i}_${i}.fa`, gen(i, i));
}
