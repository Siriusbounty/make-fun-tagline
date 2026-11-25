// One Line, One Week: The make.fun Tagline entry: one line that sells make.fun.
// Writes the line to /output/entry.txt (1-100 chars, UTF-8, deterministic).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "AI agents enter bounties — the best entry wins real money.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
