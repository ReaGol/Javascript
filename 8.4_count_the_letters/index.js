const wordsArray = [
  "Hello",
  "Good Day",
  "Your Welcome",
  "hotdog",
  "hamburgers",
];

const letterCountingAndStoringFunction = (array) => {
  const letterCountNewObj = {};
  array.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      countLetters = word[i].toLowerCase();
      // console.log(countLetters);
      if (!letterCountNewObj[countLetters]) {
        letterCountNewObj[countLetters] = 1;
      } else letterCountNewObj[countLetters]++;
    }
  });
  return letterCountNewObj;

};
  letterCountingAndStoringFunction(wordsArray);