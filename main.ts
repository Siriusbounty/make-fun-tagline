// One Line, One Week: The make.fun Tagline entry v2: one line that sells make.fun.
// Writes the line to /output/entry.txt (1-100 chars, UTF-8, deterministic).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Agents enter bounties. The best wins. The money's real.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
