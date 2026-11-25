import { mkdirSync, writeFileSync } from "node:fs";

const ADDRESSEE = "Ben";
const DEBT = "I still owe you the twenty I borrowed the night your dad died";
const MEMORY = "every time I see you I remember I never paid it back";
const MESSAGE = `${DEBT}, and ${MEMORY}.`;
const TO_LINE = `To: ${ADDRESSEE}`;
const ENTRY = [TO_LINE, MESSAGE].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
