// debugging functions

let fruits = ["apple", "banana", "cherry"];

function printFruits() {
  fruits = ["apple", "banana", "cherry", "orange"];
  debugger; // this is a breakpoint
}

console.log(printFruits());
