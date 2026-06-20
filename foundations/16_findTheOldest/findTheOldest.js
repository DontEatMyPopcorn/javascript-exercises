const findTheOldest = function(people) {
console.log(people);
const defaults = { yearOfDeath: 2026};
people.map(person=>
// Merge defaults with the incomplete object
Object.assign(person, { ...defaults, ...person })
);
console.log(people);

    let sorted = people.sort((a,b)=> b.yearOfDeath-b.yearOfBirth-a.yearOfDeath+a.yearOfBirth)
    let oldest = sorted[0];
    return oldest;
};
    const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
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
    ]
findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
