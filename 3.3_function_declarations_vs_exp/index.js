function precentageOfWorld1(population) {
    let precent = (population/7900)*100
    return precent;
}

let france = precentageOfWorld1(67.39);
let usa = precentageOfWorld1(329.5);
let mexico = precentageOfWorld1(128.9);

console.log(france, usa, mexico)



const precentageOfWorld2 = function(population) {
  let precent = (population / 7900) * 100;
  return precent;
}

let france2 = precentageOfWorld2(67.39);
let usa2 = precentageOfWorld2(329.5);
let mexico2 = precentageOfWorld2(128.9);

console.log(france, usa, mexico);