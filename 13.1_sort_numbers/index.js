const numbers = [1, -5, 666, 2, 400, 11];

const sortAscending = numbers.slice().sort((a, b) => a - b);
const sortDescending = numbers.slice().sort((a,b) => b - a);

console.log(sortAscending)
console.log(sortDescending);
