import fs from 'fs'
const letters = [
  'A',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'K',
  'L',
  'M',
  'N',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'V',
  'W',
  'Y',
]
function gen(M, N, str) {
  for (let i = 0; i < M; i++) {
    const id = `>seq${i}`
    let seq = ''
    for (let i = 0; i < N; i++) {
      seq += letters[Math.floor(Math.random() * letters.length)]
    }
    str.write(`${id}\n${seq}\n`)
  }
}

fs.mkdirSync('out', { recursive: true })

const r = [1000, 9000, 17000]
for (const i of r) {
  for (const j of r) {
    const str = fs.createWriteStream(`out/${i}_${j}.fa`)
    gen(i, j, str)
    str.end()
  }
}
