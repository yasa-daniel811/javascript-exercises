function getAge(person) {
    person.yearOfDeath ??= new Date().getFullYear;
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    const maxName = people.reduce((oldestPerson, currentPerson) => {
        return (getAge(currentPerson) > getAge(oldestPerson)) ? currentPerson : oldestPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
