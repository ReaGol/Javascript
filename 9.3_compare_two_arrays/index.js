const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const compareArrays = (array1, array2) => {
  let sameWord = [];
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        sameWord[i] = array1[i];
      }
    }
  }
  if (sameWord.length === 0) {
    return false;
  }
  return sameWord;
}; 


