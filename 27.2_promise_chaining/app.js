words = ["dog", "cat", "boy", "age"];
notOnlyWords = ["tour", "charm", 1, "guide"];

function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    arr.forEach((word, index) => {
      if (typeof word !== "string") {
        reject("This array should only include strings");
      } else {
        return (arr[index] = word.toUpperCase());
      }
    });
    resolve(arr.sort());
  });
}

// function sortWords(arr) {
//   return new Promise((resolve, reject) => {
//     if (typeof arr !== "string") {
//       reject("This array should only include strings");
//     } else {
//       return solve(arr.sort());
//     }
//     resolve(arr);
//   });
// }
sortWords(words).then((result) => {
  console.log(result);
makeAllCaps(words).then((result) => {
  console.log(result);
  return makeAllCaps(words);
});
 makeAllCaps(words).catch((err) => {
   console.log("OH NO!", err);
 });

//   return sortWords(words);
// });

// sortWords(words).catch((err) => {
//   console.log("OH NO!", err);
// });

makeAllCaps(words);
makeAllCaps(notOnlyWords);
// sortWords(words);
// sortWords(notOnlyWords);
console.log(words);
console.log(notOnlyWords);
