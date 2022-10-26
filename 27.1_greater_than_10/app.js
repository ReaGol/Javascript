function isGreaterThan10(num) {
    return new Promise((resolve, reject) => {
  if(num > 10) {
     resolve('Number is greater than 10');
  }
  else {
       reject('Number is less than 10');
   }
});
}


isGreaterThan10(20)

.then(result => {
    console.log("Success!");
    console.log(result);
  })

.catch(err => {
    console.log("Oh no!");
    console.log(err);
  });