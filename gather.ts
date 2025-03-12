import fs from 'fs'
console.log(
  [
    ['program', 'size', 'time', 'mean', 'sd'].join('\t'),
    ...fs
      .readdirSync('json')
      .filter(f => f !== 'README.md')
      .flatMap(file => {
        const text = fs.readFileSync(`json/${file}`, 'utf8')
        const res = JSON.parse(text)
        const e = res.results[0]
        return e.times.map((time: string) =>
          [
            file.split('-')[0],
            file.split('-')[1].split('_')[0],
            time,
            e.mean,
            e.stddev,
          ].join('\t'),
        )
      }),
  ].join('\n'),
)
