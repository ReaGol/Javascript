const arrStrings = ["boo", "dooooo", "hoo", "ro"];

const lengthOfWords = (word) => {
    const newArr = word.map((i) => i.length);
    return newArr;
}
console.log(lengthOfWords(arrStrings))