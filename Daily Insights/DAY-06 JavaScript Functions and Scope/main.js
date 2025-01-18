// Global scope
let globalVar = "I am a global variable";  // Accessible anywhere in the program

// Step 1: Function to greet a person
function greet(name) {
  // Local scope inside the function
  let greeting = "Hello, " + name + "!";  // This variable is only accessible inside the greet function
  console.log(greeting);  // Prints the greeting message

  // Using global variable inside the function
  console.log(globalVar);  // Accessing global variable inside the function
}

// Call the greet function
greet("Het");  // Output: Hello, Het!
               // Output: I am a global variable

greet("Dhruv");  // Output: Hello, Dhruv!
                 // Output: I am a global variable

// Step 2: Trying to access function-scoped variable outside the function
// This will result in an error because "greeting" is scoped to the greet function
// console.log(greeting);  // Error: greeting is not defined

// Step 3: Block scope with let and const
if (true) {
  let blockScopedVar = "I am inside the if block";  // Block scope
  const blockScopedConst = "I am also inside the block";  // Block scope
  console.log(blockScopedVar);  // Output: I am inside the if block
  console.log(blockScopedConst);  // Output: I am also inside the block
}

// Trying to access the block-scoped variables outside the block will result in an error
// console.log(blockScopedVar);  // Error: blockScopedVar is not defined
// console.log(blockScopedConst);  // Error: blockScopedConst is not defined

// Step 4: Function with return value
function add(a, b) {
  return a + b;  // Return the sum of a and b
}

// Calling the add function and storing the result in a variable
let result = add(10, 5);
console.log(result);  // Output: 15
