const array = [15, 16, 17, 18, 19];

const arr1 = [10, 2, 3, 4, 5, 6, 7, 9];

const findMaxNumber = (arr) => {
  return arr.reduce((acc, cur) => {
    if (acc < cur) {
      return (acc = cur);
    }
    return acc;
  }, 0);
};
console.log(findMaxNumber(arr1));

const sumOfEvenNumbers = (arr) => {
  return arr.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      return acc + cur;
    }
    return acc;
  }, 0);
};

const averageOfNums = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc + cur / arr.length;
  }, 0);
};
console.log(averageOfNums(arr1));

// const findMaxNumber = (arr) => {
//     const max = arr.reduce((acc, cur) => {
//         if (acc < cur) {
//             return acc = cur;
//         }
//         return acc;
//     }, 0)
//     return max;

// };

// console.log(findMaxNumber(arr1));

// ------------------------AnotherOption--------------------------
function maxValue(arr) {
  const max = arr.reduce((acc, cur) => {
    return acc > cur ? acc : cur;
  });
  return max;
}

console.log(maxValue(array));
