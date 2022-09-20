/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
Submit the file to Hive
*/

// From function declarations to explicit and implicit
// return functions (one of each).

function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}
// explicit
const welcome = () => {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
};
// implicit
const welcome = () => "Welcome to Appleseeds Bootcamp!";

function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}
// explicit

const power = (a) => {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

// implicit
const power=(myNumber)=>Math.pow(myNumber, 2);


// From function expressions to IIFE functions.
(squareRoot = (a) => Math.sqrt(a))();
randomNumbers = (a, b) => Math.random() * (a - b) + b;
