const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

const countCountries = () => {
  for (let mainArray = 0; mainArray < listOfNeighbours.length; mainArray++) {
    let subArray = listOfNeighbours[mainArray];
    for (let i = 0; i < subArray.length; i++) {
      console.log(`Neighbour : ${subArray[i]}`);
    }
  }
};

// With the use of two for loops, console log all the countries
// one by one and in your terminal. You should see something
// like this in your terminal:
// Neighbour: Canada
// Neighbour: Mexico
// Neighbour: Spain
// Neighbour: Norway
// Neighbour: Sweden
// Neighbour: Russia
