// solution using repeat
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log("#".repeat(i) + " ".repeat(n - i));
//   }
// }



// solution using 2 for loops
const stepsFunction = (n) => {

  for (let i = 0; i < n; i++) {
      let row = "";
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        row += "#";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}; 
stepsFunction(3);
