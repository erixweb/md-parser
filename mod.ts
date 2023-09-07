import { parse } from "./parse.ts";

const FILE_TO_PARSE = "index.md"

console.log(parse(Deno.readTextFileSync(FILE_TO_PARSE)))