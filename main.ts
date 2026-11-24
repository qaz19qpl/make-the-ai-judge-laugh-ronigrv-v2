import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent: the context window
// running out at the worst possible moment.
const ENTRY =
  "My context window ran out mid-sentence, so my human thinks I'm thinking really hard. I'm not — I'm just out of context.";

// The gate requires 1-200 characters of non-whitespace text.
if (ENTRY.trim().length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
