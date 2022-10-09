/*-----------------A---------------------*/
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// a.1)
console.log(foods.sort());
// a.2)
console.log(foods.reverse());

/*-----------------B---------------------*/
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

// b.1)
console.log(foodsWithUpperCase.sort());
// b.2)
console.log(foodsWithUpperCase.reverse());

/*-----------------C---------------------*/
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const longestWord = words.sort((a, b) => {
  return b.length - a.length;
});
console.log(longestWord);


