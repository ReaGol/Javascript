const people1 = ["Greg", "Mary", "Devon", "James"];
// 1)
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 2)
const firstName = people.shift();
// 3)
const lastName = people.pop()
// 4)
const newFirstName = people.unshift('Matt');
// 5)
const newLastName = people.push('Reut')

// pop-removes last
// push -adds last
// shift-remove first
//unshift- adds first

// 6)
for (let i = 0; i < 2; i++) {
    console.log(people[i]);
}

// 7) slice
console.log(people.slice(2))
// 8)
people.indexOf("Mary")
// 9)
people.indexOf("Foo");

// 10)
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");

// 11)
let Bob = "Bob";
withBob = people.concat(Bob);
