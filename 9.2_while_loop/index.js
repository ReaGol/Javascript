populationArr = [90, 68, 83, 17];

const populationPrecentages = (populationArr) => {
  precentages = [];
  let i = 0;
  while (i < populationArr.length) {
    precentages.push(precentageOfWorld1(populationArr[i]));
    i++;
  }

  function precentageOfWorld1(population) {
    let precent = (population / 7900) * 100;
    return precent;
  }

  return precentages;
};

console.log(populationPrecentages(populationArr));
