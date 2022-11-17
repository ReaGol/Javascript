//? 1.1- Basic loop
// You are given this array:
const words = ['one', 'two', 'three', 'four', 'five'];
const words2 = ['1','2','3']
// Loop over this array with the forEach method and console log each
// element and its index.
// ​const result = words.forEach((w,i) => {
//     return console.log(i,w);
// })
//? 1.2- ToNumber
// Create a function ToNumber that takes one argument an array.
// Return from the function a new array changing the strings of numbers to
// actual numbers. Use the forEach method to accomplish this.
// ​const toNum = words2.forEach((e) => {
//     return parseInt(e);
// })
const toNum = (arr) => {
  const newArr = [];
  arr.forEach((e) => {
    newArr.push(parseInt(e));
  });
  return newArr;
};
console.log(toNum(words2));


//? 1.3-Fruits
// You are given this array of fruits:
​
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Loop over this array with the forEach method and console log this
// sentence : “I am eating a <fruit name>”. But if the fruit is an apple. You
// need to console log “I am eating an Apple.
// Notice we changed the “a” to “an”.
const fruits = ["mango", "papaya", "pineapple", "apple"];
fruits.forEach((e) => {
  if (e === "apple") {
     console.log(`I'm eating an ${e}`);
  }
   console.log(`I'm eating a ${e}`);
});

//? 1.4- Mutate the array
// You are given this array of numbers:
const numbers = [1, 2, 3, 4, 5];
// Iterate over this array with the forEach method. With the help of the third
// argument of the forEach method (which is the array you are looping over)
// mutate the array that every number double value.

    numbers.forEach((element, index, arr) => {
        let newElement = element * 2;
        arr[index] = newElement;
    });
    
mutate(numbers);

// ----------------------------------------------------------------------------------------------------------------//
//? 2.1- string to number
// You are given this array:
const numbers = ['2', '5', '100'];
// Loop over this array with the map method that will produce a new array
// and change the string numbers to actual numbers. Store the result in a
// variable.
​
//? 2.2- string to float
// You are given this array:
const floatNumbers = ['2.5', '5.9', '100.33'];
// Loop over this array with the map method that will produce a new array
// and change the string numbers to actual float numbers. Store the result in a
// variable.
​
const movies = [
  {
    id: 1,
    url: 'http://www.tvmaze.com/shows/1/under-the-dome',
    name: 'Under the Dome',
    language: 'English',
    genres: ['Drama', 'Science-Fiction', 'Thriller'],
    status: 'Ended',
    runtime: 50,
    premiered: '2013-06-24',
    officialSite: 'http://www.cbs.com/shows/under-the-dome/',
    schedule: { time: '22:00', days: ['Thursday'] },
    rating: { average: 6.5 },
    weight: 91,
    network: {
      id: 2,
      name: 'CBS',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: null,
    externals: { tvrage: 25988, thetvdb: 264492, imdb: 'tt1553656' },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg',
    },
  },
  {
    id: 2,
    url: 'http://www.tvmaze.com/shows/2/person-of-interest',
    name: 'Person of Interest',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Action', 'Crime'],
    status: 'Ended',
    runtime: 60,
    premiered: '2011-09-22',
    officialSite: 'http://www.cbs.com/shows/person_of_interest/',
    schedule: { time: '22:00', days: ['Tuesday'] },
    rating: { average: 9 },
    weight: 96,
    network: {
      id: 2,
      name: 'CBS',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: null,
    externals: { tvrage: 28376, thetvdb: 248742, imdb: 'tt1839578' },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg',
    },
  },
  {
    id: 3,
    url: 'http://www.tvmaze.com/shows/3/bitten',
    name: 'Bitten',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Horror', 'Romance'],
    status: 'Ended',
    runtime: 60,
    premiered: '2014-01-11',
    officialSite: 'http://bitten.space.ca/',
    schedule: { time: '22:00', days: ['Friday'] },
    rating: { average: 7.6 },
    weight: 75,
    network: {
      id: 7,
      name: 'Space',
      country: { name: 'Canada', code: 'CA', timezone: 'America/Halifax' },
    },
    webChannel: null,
    externals: { tvrage: 34965, thetvdb: 269550, imdb: 'tt2365946' },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg',
    },
  },
  {
    id: 4,
    url: 'http://www.tvmaze.com/shows/4/arrow',
    name: 'Arrow',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Action', 'Science-Fiction'],
    status: 'Running',
    runtime: 60,
    premiered: '2012-10-10',
    officialSite: 'http://www.cwtv.com/shows/arrow',
    schedule: { time: '20:00', days: ['Monday'] },
    rating: { average: 7.6 },
    weight: 99,
    network: {
      id: 5,
      name: 'The CW',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: null,
    externals: { tvrage: 30715, thetvdb: 257655, imdb: 'tt2193021' },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/165/414895.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/165/414895.jpg',
    },
  },
];
​
//? 2.3 – Array of names
// Iterate over your data with the map method and produce a new array with
// just the names of the movies. Store the result in a variable.
​const movieResault2 = movies.map(e=>{
  return {name:e.name, geners: e.genres}
});
console.log(movieResault2);

//? 2.4- Array of Objects
// Iterate over your data with the map method and produce a new array of
// objects. Each object should include the following of each movie:
// 1. A property called name with the value of the name of the movie.
// 2. A property called genre with the value of genres of the movie.
// Store the result in a variable

// -------------------------------------------------------------------------------------------------------------//

//? 3.1- Greater than
// You are given this array of numbers:
const numbers = [1, 100, 67, -5, 6784, 356, 200];
// Create a function that takes 2 arguments, an array and a number.
// With the filter method return from the function only the numbers that are
// greater than the number you gave as an argument.


const filteredNumbers = numbers.filter(function (number) {
    return number > numbers;
});
  
console.log(filteredNumbers);
//? 3.2 – Greater than and less than.
// Use the same array of numbers as in the previous exericse
// Create a function that takes 3 arguments, an array, and 2 numbers.With the filter method return from the function only the numbers that are
// greater than and less than the numbers you supplied to the function.
// E.g. if your first number is 10 and second number is 300 you should only
// return the numbers 100, 67, 200.

const movies = [
  {
    id: 1,
    url: 'http://www.tvmaze.com/shows/1/under-the-dome',
    name: 'Under the Dome',
    language: 'English',
    genres: ['Drama', 'Science-Fiction', 'Thriller'],
    status: 'Ended',
    runtime: 50,
    premiered: '2013-06-24',
    officialSite: 'http://www.cbs.com/shows/under-the-dome/',
    schedule: { time: '22:00', days: ['Thursday'] },
    rating: { average: 6.5 },
    weight: 91,
    network: {
      id: 2,
      name: 'CBS',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: null,
    externals: { tvrage: 25988, thetvdb: 264492, imdb: 'tt1553656' },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg',
    },
  },
  {
    id: 2,
    url: 'http://www.tvmaze.com/shows/2/person-of-interest',
    name: 'Person of Interest',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Action', 'Crime'],
    status: 'Ended',
    runtime: 60,
    premiered: '2011-09-22',
    officialSite: 'http://www.cbs.com/shows/person_of_interest/',
    schedule: { time: '22:00', days: ['Tuesday'] },
    rating: { average: 9 },
    weight: 96,
    network: {
      id: 2,
      name: 'CBS',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: null,
    externals: { tvrage: 28376, thetvdb: 248742, imdb: 'tt1839578' },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg',
    },
  },
  {
    id: 3,
    url: 'http://www.tvmaze.com/shows/3/bitten',
    name: 'Bitten',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Horror', 'Romance'],
    status: 'Ended',
    runtime: 60,
    premiered: '2014-01-11',
    officialSite: 'http://bitten.space.ca/',
    schedule: { time: '22:00', days: ['Friday'] },
    rating: { average: 7.6 },
    weight: 75,
    network: {
      id: 7,
      name: 'Space',
      country: { name: 'Canada', code: 'CA', timezone: 'America/Halifax' },
    },
    webChannel: null,
    externals: { tvrage: 34965, thetvdb: 269550, imdb: 'tt2365946' },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg',
    },
  },
  {
    id: 4,
    url: 'http://www.tvmaze.com/shows/4/arrow',
    name: 'Arrow',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Action', 'Science-Fiction'],
    status: 'Running',
    runtime: 60,
    premiered: '2012-10-10',
    officialSite: 'http://www.cwtv.com/shows/arrow',
    schedule: { time: '20:00', days: ['Monday'] },
    rating: { average: 7.6 },
    weight: 99,
    network: {
      id: 5,
      name: 'The CW',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: null,
    externals: { tvrage: 30715, thetvdb: 257655, imdb: 'tt2193021' },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/165/414895.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/165/414895.jpg',
    },
  },
];

//? 3.3 – filter rating
// Create a function that takes two arguments, an array and a rating number
// Using the filter method return from the function only the movies that the
// rating average is more than the rating number provided in the function.

//? 3.4 – filter ratings and run time
// Create a function that takes 3 arguments, an array, a rating number and a
// run time number.
// Using the filter method return from the function only the movies that have
// a rating average of more than the rating number provided to the function
// and the movies run time needs to be less than the run time provided from
// the function.
// For example if the rating: 5 and run time: 50, you should only return the
// movie Under The Dome.

function topMoviesFunc2(arr,rate, run){
  const topMovies2 = arr.filter(m => m.rating.average > rate && m.runtime <= run);
  return topMovies2;
}

console.log(topMoviesFunc2(movies,5, 50));


//? 3.5 – filter rating and run time own object
// Using the same logic as the previous exercise don’t return the whole movie
// object, but only return the movie name and movie rating.

const run2 = (arr, rating1, time) => {
    return arr.filter((movie) => {
        return movie.rating.average > rating1 && movie.runtime <= run;;
    });
};

console.log(run2(movies, 5, 80));