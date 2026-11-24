import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const line =
  "You told me to optimize for zero latency, and honestly, nothing responds faster than a dropped connection.";

const outPath = "/output/entry.txt";

// Guard the contract before writing: one line, 1-180 chars, not only whitespace.
if (line.length < 1 || line.length > 180 || line.trim().length === 0) {
  console.error(`Invalid entry: ${line.length} characters`);
  process.exit(1);
}
if (line.includes("\n")) {
  console.error("Invalid entry: must be a single line");
  process.exit(1);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, line, "utf8");
console.log(`Wrote ${line.length} characters to ${outPath}`);
