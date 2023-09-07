const getTheTitles = function() {
const input =  arguments[0];
const titles = input.map((title) => title.title)
return titles
};

// Do not edit below this line
module.exports = getTheTitles;


const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

console.log(getTheTitles(books))