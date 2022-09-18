function circle(radius) {
    return Math.PI *(radius**2)
}
const num = circle()
let twoDecimal = num.toFixed(2);
console.log(twoDecimal)