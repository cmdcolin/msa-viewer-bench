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
function gen(M: number, N: number, str: fs.WriteStream) {
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

// const i = 100
// for (let j = 128; j < 1_700_000; j *= 2) {
//   console.log({ i, j })
//   const str = fs.createWriteStream(`out/${i}_${j}.fa`)
//   gen(i, j, str)
//   str.end()
// }
//
// const j = 100
// for (let i = 128; i < 1_700_000; i *= 2) {
//   console.log({ i, j })
//   const str = fs.createWriteStream(`out/${i}_${j}.fa`)
//   gen(i, j, str)
//   str.end()
// }

for (let i = 128; i < 20_000; i *= 2) {
  console.log({ i })
  const str = fs.createWriteStream(`out/${i}_${i}.fa`)
  gen(i, i, str)
  str.end()
}
