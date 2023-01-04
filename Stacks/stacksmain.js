
import stacks from "./stacks.js"

const brands = new stacks();

brands.push("Adidas");
brands.push("Puma")
brands.push("Nike")

console.log(brands.pop())
console.log(brands)
console.log(brands.peek())