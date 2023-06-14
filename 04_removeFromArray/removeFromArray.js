const removeFromArray = function(array, ...args) {
    let arr = array;
    let numArr = args;
    for (let i = 0; i < numArr.length; i++) {
        let index = arr.indexOf(numArr[i]);
        if (index >= 0) {
            arr.splice(index, 1);
        }
    }
return arr;
};


console.log(removeFromArray([1, 2, 3, 10, 11], 2, 10))
// Do not edit below this line
module.exports = removeFromArray;
