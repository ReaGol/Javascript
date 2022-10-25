const annoyer = {
    phrases: ["literally","Totes!","YOLO", "i cant even","cray cray"],
    pickPhrase() {
        const {phrases} = this;
        const idx = Math.floor(Math.random() * this.phrases.length)
        return phrases[idx]
    },
    
    start() {
       this.timerId =  setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000)
    },
    stop() {
        clearInterval(this.timerId);
    }
}

//the value of this is different imside a func then in a method inside an object. 
// This inside object refers to the object, while this in a func refers to the window.
//when using inside an object, we must call the object name and then the func, 
// or 'this' will refer to the window and not the object itself.
//in arrow functions the value of this does not change - it refers to the window. 
// the this in an arrow func receives its value from his parent/nearest this!