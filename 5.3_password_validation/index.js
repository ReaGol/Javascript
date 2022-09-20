// 1)
const validatPass = function (passwordX) {
  for (let i = 0; i < passwordX.length; i++) {
    if (passwordX.length > 7) return "strong";
    else return "weak";
  }
};

// 2)
const passTernary = function (passwordY) {
  passwordY.length > 7 ? console.log("strong") : console.log("weak");
};

// 3)
const passTernary2 = function (passwordZ) {
  const regex = /[A-Z]/g;
  passwordZ.length < 7
    ? console.log("weak")
    : passwordZ.match(regex) && passwordZ.length > 7
    ? console.log("very strong")
    : console.log("strong");
};
