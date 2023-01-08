import Stack from "./stacks.js";

const brands = new Stack();

brands.push("Adidas");
brands.push("Puma");
brands.push("Nike");

console.log(brands.pop());
console.log(brands);
console.log(brands.peek());
