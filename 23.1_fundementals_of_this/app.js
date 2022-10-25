


// a. In your own words what will this point to and why?

console.log(this);
//it is set to the window object

// b. How can you fix this code?
//dont use a method on the object

// const myObj = {
//   name: "Timmy",
//   greet() {
//     console.log(`Hello ${this.name}`);
//   },
// };
// myObj.greet();

// // In your own words what will this point to and why?
//window object
// const myFuncDec = function () {
// console.log(this);
// };

// // In your own words what will this point to and why?
//it will point to the window object, because the 'this' in an arrow func receives its value from his nearest this.
// const myFuncArrow = () => {
// console.log(this);
// };
// myFuncArrow();

// // a. In your own words, what will this point to and why?
// the window, because it is an arrow function
// // b. How can you fix this code?
const func = function () {
  console.log(this);
};
document.querySelector(".element").addEventListener("click", func);