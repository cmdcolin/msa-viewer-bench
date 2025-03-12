import puppeteer from 'puppeteer'
import fs from 'fs'

const browser = await puppeteer.launch({
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    // https://pptr.dev/troubleshooting#neterr_blocked_by_client-when-navigating-to-an-http-url-in-chrome
    '--disable-features=HttpsFirstBalancedModeAutoEnable',
  ],
})
const page = await browser.newPage()
const url = process.argv[2]

await page.goto(url)

await page.setViewport({
  width: 1080,
  height: 1024,
})

await page.waitForSelector('canvas', { timeout: 120000 })
const ret = await page.$eval('canvas', (val: HTMLCanvasElement) =>
  val.toDataURL().replace(/^data:image\/\w+;base64,/, ''),
)
fs.mkdirSync('screenshots', { recursive: true })
const p = encodeURIComponent(url)
await page.screenshot({
  path: `screenshots/wasabi-fullpage-${p}.png`,
})
fs.writeFileSync(
  `screenshots/wasabi-fragment-${p}.png`,
  Buffer.from(ret, 'base64'),
)

await browser.close()
