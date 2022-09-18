function countryInfo(country, population, capitalCity) {
    let str = country + " has " + population + " million people and its capital city is "+capitalCity
    return(str);
}

let firstCountry = countryInfo('Israel', '9', 'Jeruz');
let secondCountry = countryInfo('Hungary', '10', 'Budapest');
let thirdCountry = countryInfo('England', '56', 'London');
console.log(firstCountry)
console.log(secondCountry)
console.log(thirdCountry)