function getAge (person) {
    let death = person.yearOfDeath;
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        return (getAge(currentPerson) > getAge(oldestPerson) ? currentPerson : oldestPerson);
    })
};

// Do not edit below this line
module.exports = findTheOldest;

//NOTES:
//The function has to return something, and the reduce function!!
//In this example, the function getAge is necessary to get a year of death for people that are still alive.
//The reduce function takes the first item in the array to be the oldest person so we can access the attributes 
// of the object straight away in the reduce function.
