import fs from 'fs'
const f = fs.readdirSync('json')
console.log(['program', 'size', 'time', 'min', 'max'].join('\t'))
console.log(
  f
    .filter(f => f !== 'README.md')
    .map(file => {
      console.log
      const text = fs.readFileSync(`json/${file}`, 'utf8')
      const res = JSON.parse(text)
      const e = res.results[0]
      console.log({ res: res.results[0] })
      return [
        file.split('-')[0],
        file.split('-')[1].split('_')[0],
        e.mean,
        e.mean - e.stddev,
        e.mean + e.stddev,
      ].join('\t')
    })
    .join('\n'),
)
