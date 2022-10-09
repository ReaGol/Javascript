const printToConsole = (string) => {
  console.log(string);
};

const isString = (str, callback) => {
  if (typeof str === "string") {
    return callback(str);
  }
}; 
isString()

const firstWordUpperCase = (myStr, myCallback) => {
  const newSentence = myStr.split(" ");
  newSentence[0] = newSentence[0].toUpperCase();
  newSentence = newSentence.join(" ");
  return myCallback(newSentence);
};

const makeDash = (str) => {
  return str.split(" ").join("-");
};

const res = firstWordUpperCase(someString, makeDash);
console.log(res);


function isString(str, callback) {
  if (typeof str === "string") {
    callback(true);
  } else {
    callback(false);
  }
}

isString("Hello",  (result) => {
    console.log(result);
    }
);

isString(123, (result) => {
    console.log(result);
    }
);

function firstWordUpperCase(str, callback) {
    let newStr = str.split(" ");
    console.log("haha",newStr);
    newStr[0] = newStr[0].toUpperCase();
    newStr = newStr.join(" ");
   
    callback(newStr);
  }
  
  firstWordUpperCase("hello world", (result) => {
      console.log(result);
      }
    );

function reverseString(str, callback) {
    let newStr = str.split("").reverse().join("");
    callback(newStr);
  }

reverseString("hello world",  (result) => {
    console.log(result);
    }
    );



 
