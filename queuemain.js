 
 import Queue from "./queue.js";
 
 const cars = new Queue();

 cars.enqueue("Volkswagen")
 cars.enqueue("Audi")
 cars.enqueue("Mercedes")
 
 console.log(cars.dequeue());
 console.log(cars.peek());