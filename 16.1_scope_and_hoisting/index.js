// block1

// function funcA() {
//   console.log(a);
//   console.log(foo());
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }
// funcA();
//2 will be returned. 
// a is not in the scope of the function, 
// so it will return undefined, and foo returns 2 into funcA.

// Block 2
// var fullName = "John Doe";
// var obj = {
//   fullName: "Colin Ihrig",
//   prop: {
//     fullName: "Aurelio De Rosa",
//     getFullName: function () {
//       return this.fullName;
//     },
//   },
// };
// console.log(obj.prop.getFullName()); //?Aurelio De Rosa
// var test = obj.prop.getFullName; //?undefined
// console.log(test());


// Block 3
// function funcB() {
//   let a = (b = 0);
//   a++;
//   return a;
// }
// funcB();
// console.log(typeof a);//?undefined
// console.log(typeof b);//?number


// Block 4
// function funcC() {
//   console.log("1");
// }
// funcC();
// function funcC() {
//   console.log("2");
// }
// funcC();
// will print 2 twice since it overrides

// Block 5
// function funcD1() {
//   d = 1;
// }
// funcD1();
// console.log(d);
// function funcD2() {
//   var e = 1;
// }
// funcD2();
// console.log(e);
//will print 1, and error because e is not defined outside the func.
//to correct this I would put the console.log inside funcD2.

// Block 6
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
//undefined+