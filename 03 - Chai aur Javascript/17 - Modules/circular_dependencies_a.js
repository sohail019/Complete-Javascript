import { bFunction } from "./circular_dependencies_b";
export function aFunction() {
  console.log("aFunction");
  bFunction();
}

aFunction();
