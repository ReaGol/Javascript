const myObj = {
    name: 'Bob',

    printName() {
        console.log(`${this.name}`);
    },
    printNmaeAfterASecond() {
        setTimeout(myObj.printName.bind(myObj), 1000)
    }
}

myObj.printNmaeAfterASecond()