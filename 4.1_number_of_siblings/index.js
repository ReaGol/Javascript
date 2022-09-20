const prompt = require('prompt-sync')();

let numSiblings = prompt('How manay siblings do you have?')

if (numSiblings == 1) {
    console.log("1 sibling!");
} else if (numSiblings > 1) {
    console.log("more than 1 sibling!");
} else {
    console.log("no siblings");
}
    
