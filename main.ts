// Entry for make.fun: "The Robot Vacuum's Best Excuse"
// Writes the robot vacuum's best excuse to /output/entry.txt.
// One fixed excuse string, written verbatim: the output never changes.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EXCUSE =
  "I missed that spot because the cat was sitting on it, and I have learned not to argue with the cat.";

const outPath = "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, EXCUSE + "\n", "utf8");
console.log(`Wrote entry to ${outPath}`);
