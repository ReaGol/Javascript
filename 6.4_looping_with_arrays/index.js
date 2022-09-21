populationArr = [90, 68, 83, 17];

const populationPrecentages = (populationArr) => {
  precentages = [];
  for (let i = 0; i < populationArr.length; i++) {
    precentages.push(precentageOfWorld1(populationArr[i]));
  }

  function precentageOfWorld1(population) {
    let precent = (population / 7900) * 100;
    return precent;
  }

  return precentages;
};

console.log(populationPrecentages(populationArr));
