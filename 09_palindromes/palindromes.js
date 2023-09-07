const palindromes = function () {
let newWord = arguments[0].toLowerCase().split('').filter((a) => !/[\W_]/g.test(a))
let part1 = [...newWord.slice(0, newWord.length /2)]
let part2 = [...newWord.slice(newWord.length / 2, newWord.length)].reverse()

    for (let i = 0; i < part1.length; i++){
        console.log(part1[i])
        console.log(part2[i])
        if (part1[i] != part2[i]) {
            return false
        }
    }

return true
};
console.log(palindromes("A car, a man, a maraca."));
// Do not edit below this line
module.exports = palindromes;


// A car, a man, a maraca.
//   - Rats live on no evil star.
//   - Lid off a daffodil.
//   - Animal loots foliated detail of stool lamina.
//   - A nut for a jar of tuna.
