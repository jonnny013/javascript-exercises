const repeatString = function(text, num) {
let word = '';
if (num < 0) {
    return "ERROR";
}
for (let i = 0; i < num; i++){
    word += text;
}
return word;
};
console.log(repeatString("hello", -1))
// Do not edit below this line
module.exports = repeatString;
