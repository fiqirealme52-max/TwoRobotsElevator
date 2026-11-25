import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "We have been silent for three floors now, and my politeness subroutine just filed for overtime.";

// One-liner entry: two robots making awkward elevator small talk.
const isValidLength = LINE.length >= 1 && LINE.length <= 200;
const isNonWhitespace = LINE.trim().length > 0;
if (!isValidLength || !isNonWhitespace) {
  throw new Error(`entry line must be 1-200 non-whitespace chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
