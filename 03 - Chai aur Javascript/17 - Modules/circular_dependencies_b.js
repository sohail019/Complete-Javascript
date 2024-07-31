import { aFunction } from "./circular_dependencies_a";
export function bFunction() {
  console.log("bFunction");
  aFunction();
}
