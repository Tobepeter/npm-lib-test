import { say } from "./lib/esm-lib.mjs";
import defaultSay from "./lib/esm-lib.mjs";

function main() {
  say();
  defaultSay();
}

main();
