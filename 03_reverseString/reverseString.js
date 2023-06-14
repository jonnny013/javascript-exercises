const reverseString = function(string) {
let array = string.split('');

let reverse = array.reverse();

let newString = reverse.join('');

return newString;
};
reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
