const answer = document.querySelector('.user-answer');
const message = document.querySelector(".message");
const guessedKeys = document.querySelector(".guessed-keys");
const guessedArr = []
//generate random letter
const alphabet = "abcdefghijklmnopqrstuvwxyz"
let getRandomLetter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};
//create key press event
document.addEventListener('keyup', (e) => {
  //check if it is a letter
    if(alphabet.charAt.includes(e.key.toLowerCase())) {
        console.log("im a letter")
    } else {
        console.log(e.key);
        console.log('im not a letter')
        message.textContent = 'Only letters are valid'
    }
});

function checkLetter(randomLetter, guess) {
    
}
//if it is a letter check if it is the correct letter (function)
//! if yes: display in block, stop the game (cancel event, offer new game)
//! if no: check if letter was guessed before, save letter to guessed list