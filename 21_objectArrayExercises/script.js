let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };


let users = [john, pete, mary];
let names = users.map(person => person.name);

// special case here - need to use '()' because person => { would indicate start of a function.
let usersMapped = users.map(person => ({
    fullname: `${person.name}, ${person.surname}`,
    id: person.id
}));

