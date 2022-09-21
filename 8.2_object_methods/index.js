const myCountry = {
  country: "Israel",
  capital: "Jerusalem",
  language: "Hebrew",
  population: 9,
  neighbours: ["Jordan", "Syria", "Lebanon", "Egypt"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
      let isIsland = myCountry.neighbours.length === 0 ? true : false; 
 
    console.log(isIsland)
  },
};

myCountry.describe();
myCountry.checkIsland();
