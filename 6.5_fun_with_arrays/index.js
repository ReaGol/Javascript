//1)
const obj = { name: "reut" };
// Array.fill({name : 'reut'})
let arr = new Array(100).fill({ name: "reut" });
console.log(arr.length);

// 2)
const arr1 = Array.from({ length: 100 }, (element, index) => {
  return index + 1;
});
console.log(arr1);


// 3)
const obj2 = { val1: "a", val2: "b", val3: "c" };
console.log(Object.values(obj2));

// 4)
const arr2 = ["a", "b", "c"];
console.log(Object.assign({}, arr2));
// spread?

// 5)
const arr3 = ["e", "f", "g"];
console.log(Array.isArray(arr3));

// 6)
// copy array
// modified/unmodified

const arrayCopy1 = arr.slice();
console.log(arrayCopy1);

arr[0] = 100;
const arrayCopy2 = arr;
console.log(arrayCopy2);
