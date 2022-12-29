 /*
 import Queue from "./queue.js";
 
 const cars = new Queue();

 cars.enqueue("Volkswagen")
 cars.enqueue("Audi")
 cars.enqueue("Mercedes")
 
 console.log(cars.dequeue());
 console.log(cars.peek());
 */

 // SEPERATE 

  const mySet = new Set();

  mySet.add(32);
  mySet.add(44);
  mySet.add(56);
  mySet.add(420)
  mySet.add({
    name: "Uvejs",
    age: 15,
  });

  mySet.add("sets");
  mySet.add(53.64);

  // Find size of Set
  console.log("How big is mySet? " + mySet.size);

  // Check for value
  console.log("Does my Set have numbers 420? " + mySet.has(420));

  // Delete item
  mySet.delete(32,)

  // Loop through set
  for (let item of mySet){
        console.log(item);
  }

  // Convert to Array
  const myArray = Array.from(mySet);

  console.log(myArray)

  console.log(mySet);
