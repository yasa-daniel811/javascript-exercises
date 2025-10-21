let john = { name: "John", surname: "Smith", id: 1, age: 25 };
let pete = { name: "Pete", surname: "Hunt", id: 2, age: 30 };
let mary = { name: "Mary", surname: "Key", id: 3, age: 28 };


let users = [john, pete, mary];
let names = users.map(person => person.name);

// special case here - need to use '()' because person => { would indicate start of a function.
let usersMapped = users.map(person => ({
    fullname: `${person.name}, ${person.surname}`,
    id: person.id
}));

let arr = [pete, john, mary];

function sortByAge (personArray) {
    return personArray.sort((a, b) => a.age - b.age);
}

function getAverageAge (personArray) {
    return personArray.reduce((sum, current) => sum + current.age, 0) / personArray.length;
}

function groupById (personArray) {
    return personArray.reduce((usersById, user) => { 
        usersById[user.id] = user
        return usersById;
    }, {})
}