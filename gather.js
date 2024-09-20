import fs from "fs";
const f = fs.readdirSync("json");
console.log(["program", "size", "time"].join("\t"));
console.log(
  f
    .filter((f) => f !== "README.md")
    .map((file) =>
      [
        file.split("-")[0],
        file.split("-")[1].split("_")[0],
        JSON.parse(fs.readFileSync(`json/${file}`, "utf8")).results[0].mean,
      ].join("\t"),
    )
    .join("\n"),
);
