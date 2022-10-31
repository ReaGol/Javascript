// const url = "https://swapi.dev/api";

const table = document.querySelector('.table')
const titles = ['Name', 'Hair', 'Height', 'Planet Name', 'Planet Population']

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, 'data')
    return data;
  } catch (e) {
    console.log("ERROR", e);
  }
};

const getArrOfCharacters = async () => {
  const { results } = await fetchData("https://swapi.dev/api/people/");
  const arrOfPromises = [];

  for (let i = 0; i < results.length; i++) {
    const planet = fetchData(results[i].homeworld);
    arrOfPromises.push(planet);
  }
  const arrOfWorlds = await Promise.all(arrOfPromises);
  console.log(arrOfWorlds);
  const structuredData = strucCharObj(results, arrOfWorlds);
  console.log(structuredData, 'structured info');
  return structuredData;
};


const strucCharObj = (arrChar, worldsArr) => {
  return arrChar.map((char, index) => {
    return {
      name: char.name,
      hair: char.hair_color,
      height: char.height,
      planet: {
        name: worldsArr[index].name,
        population: worldsArr[index].population,
      },
    };
  });
};

getArrOfCharacters();

const paintHead = (text) => {
  const heading = document.createElement('div');
  heading.textContent = text;
  heading.classList.add('title');
  table.appendChild(heading);

}
 
const paintRow = (arrOfData) => {
  const row = document.createElement("div");
  row.classList.add("row");
  arrOfData.forEach((e) => {
    const cell = document.createElement('div');
    cell.classList.add("cell");
    cell.textContent = e;
    row.appendChild(cell)
  });

  table.appendChild(row)
};

const setSpinner = (bool) => {
  if(bool) {
    const spinner = document.createElement('h3');
    spinner.textContent = 'Loading...'
    table.appendChild(spinner);
  } else {
    const spinner = document.querySelector("h3");
    table.removeChild(spinner);
  }
}
const paintPage = async() => {
  let isLoading = true;
  setSpinner(isLoading)
  paintHead("Star Wars");
  paintRow(titles);
  console.log(titles, 'titles')
  const charDataArr = await getArrOfCharacters();
  charDataArr.forEach((char) => {
    const newArr = [char.name, char.hair, char.height, char.planet.name, char.planet.population];
    console.log(char.name, 'name')
    console.log(char.hair, 'hair');
    paintRow(newArr)
  });
  isLoading = false;
  setSpinner(isLoading);
};
paintPage();