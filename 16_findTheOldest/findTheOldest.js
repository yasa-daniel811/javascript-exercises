const findTheOldest = function(people) {
    const maxName = people.reduce((oldestPerson, currentPerson) => {
        return (currentPerson.yearOfDeath - currentPerson.yearOfBirth) > (people[oldestPerson].yearOfDeath - people[oldestPerson].yearOfBirth) ? person : oldestPerson;
    })
     
};

// Do not edit below this line
module.exports = findTheOldest;
