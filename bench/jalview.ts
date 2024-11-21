import puppeteer from 'puppeteer'
import fs from 'fs'

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})
const page = await browser.newPage()
const url = process.argv[2]

await page.goto(url)

// Set screen size
await page.setViewport({ width: 1080, height: 1024 })

await page.waitForSelector('#testApplet_canvas2', { timeout: 120000 })
const ret = await page.$eval('#testApplet_canvas2', (val: HTMLCanvasElement) =>
  val.toDataURL().replace(/^data:image\/\w+;base64,/, ''),
)
fs.mkdirSync('screenshots', { recursive: true })
const p = encodeURIComponent(url)
await page.screenshot({
  path: `screenshots/jalview-fullpage-${p}.png`,
})
fs.writeFileSync(
  `screenshots/jalview-fragment-${p}.png`,
  Buffer.from(ret, 'base64'),
)

await browser.close()
