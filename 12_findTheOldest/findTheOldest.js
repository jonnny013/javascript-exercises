const findTheOldest = function() {
const people = [...arguments[0]];
const currentYear = new Date().getFullYear();
for (const person of people) {
  if (!person.hasOwnProperty("yearOfDeath")){
    person.yearOfDeath = currentYear
  }
}

let oldestAge = people.reduce((oldest, currentPerson) => {
  return currentPerson.yearOfDeath - currentPerson.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth ? currentPerson : oldest
})

return oldestAge
};

// Do not edit below this line
module.exports = findTheOldest;

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
  {
    name: "Jon",
    yearOfBirth: 1992,
  },
];

console.log(findTheOldest(people))