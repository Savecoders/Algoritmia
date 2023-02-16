// global scope

let fruits = ["apple", "banana", "cherry"];

// fruits is a global variable
function printFruits() {
  console.log(fruits);
}

printFruits(); // ["apple", "banana", "cherry"]

function printNames() {
  let names = ["Jaime", "Jon", "Arya"];
  console.log(names);
  // names is a local variable
}

printNames(); // ["Jaime", "Jon", "Arya"]

// console.log(names); // ReferenceError: names is not defined

// ----------
// block scope
// ----------

if (true) {
  let name = "Jaime";
  console.log(name); // Jaime
}

// console.log(name); // ReferenceError: name is not

// hosting

// console.log(name); // undefined
// var name = "Jaime";

// console.log(name); // ReferenceError: name is not defined
