const fibonacci = function() {
    if (arguments[0] < 1) {
      return "OOPS";
    }
let number =arguments[0];
let array = [1, 1]
for (let i = 0; i < number; i++) {
    array.push(array[i] + array[i + 1])
}
return array[number - 1]
};
console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
