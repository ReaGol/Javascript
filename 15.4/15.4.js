function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(arr[i]);
  }
  return sum;
}
console.log(calcAverage([85, 90, 92]));
