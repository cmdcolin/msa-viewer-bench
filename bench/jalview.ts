import puppeteer from "puppeteer";
import fs from "fs";

const browser = await puppeteer.launch({
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
const page = await browser.newPage();
const url =
  "https://www.jalview.org/jalview-js/JalviewJS.shtml/?open%20https://www.jalview.org/examples/uniref50.fa%20tree%20https://www.jalview.org/examples/ferredoxin.nw%20sortByTree%20colour%20C=yellow;R,K,H=FF5555;D,E=5555FF";

await page.goto(url);

// Set screen size
await page.setViewport({ width: 1080, height: 1024 });

await page.waitForSelector("#testApplet_canvas2");
page.on("console", (...log) => console.log(...log));
const ret = await page.$eval("#testApplet_canvas2", (val: HTMLCanvasElement) =>
  val.toDataURL().replace(/^data:image\/\w+;base64,/, ""),
);
await page.screenshot({ path: "jalview.png" });
fs.writeFileSync("jalview2.png", Buffer.from(ret, "base64"));

await browser.close();
