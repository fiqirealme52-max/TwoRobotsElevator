import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two Robots in an Elevator entry: one line of awkward small talk that one
// robot says to another while they ride an elevator together.
//
// The line: two robots have been silent for three floors, and the speaker's
// politeness subroutine has just filed for overtime. Robot logic (a subroutine
// filing paperwork) shows through the politeness, the awkwardness is the
// silence itself, and the turn — a subroutine filing for overtime — is not
// guessable from the setup. 95 characters, one line, no setup wasted.
const LINE =
  "We have been silent for three floors now, and my politeness subroutine just filed for overtime.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS || !LINE.trim()) {
  throw new Error("line must be 1-200 characters of non-whitespace text");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outPath}`);
