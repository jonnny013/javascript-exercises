const add = function() {
  let total = 0;
	for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total;
};

const subtract = function() {
	let total = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
    total -= arguments[i]
  }
  return total;
};

const sum = function() {
	let num = [...arguments].flat();
  console.log(num)
  return num.reduce((a, b) => {return a + b}, 0);
};


const multiply = function() {
  let total = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
    total *= arguments[i]
  }
  return total;
};
console.log(multiply(5,3))
const power = function() {
	let base = arguments[0];
  let power = arguments[1];
  let total = 1;
  for (let i = 0; i < power; i++) {
     total *= base;
  }
  return total;
};

const factorial = function() {
	let array = [];
  console.log(arguments)
  for (let i = 1; i <= arguments[0]; i++ ) {
    array.push(i);
  }

  return array.reduce((a, b) => {return a * b}, 1);
};
 console.log(factorial(5))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
