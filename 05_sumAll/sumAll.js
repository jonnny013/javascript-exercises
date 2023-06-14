const sumAll = function(numOne, numTwo) {
let sum = 0;
for (let i = numOne; i <= numTwo; i++) {
    sum += i;
}
if (numOne < 0 || numTwo < 0) {
    return "ERROR"
}
else if (typeof numOne != "number" || typeof numTwo != "number") {
    return "ERROR"
}
else if (numOne > numTwo) {
    for (let i = numTwo; i <= numOne; i++) {
        sum += i;
    }
}
return sum;
};
console.log(sumAll(10, 4));
// Do not edit below this line
module.exports = sumAll;
