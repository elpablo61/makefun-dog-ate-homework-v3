import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The Dog Ate My Homework: Funniest Excuse — entry program.
// Writes the single excuse line to /output/entry.txt for the judge.
// The line stays a plain text file so the program never hard-codes it.
const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(dir, "entry.txt"), join(outDir, "entry.txt"));
