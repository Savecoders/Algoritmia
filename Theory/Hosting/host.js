// hosting

// console.log(name); // undefined
// var name = "Jaime";

// console.log(name); // ReferenceError: name is not defined

// hosting in functions

// in functions the variables are hoisted to the top of the function
console.log(isSecretName("jose"));

function isSecretName(name) {
  return name === "jose";
}
