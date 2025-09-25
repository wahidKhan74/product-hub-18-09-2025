// Pass by Reference in JS (Objects & Arrays)
// Objects, arrays, and functions are passed by reference in JS.
// That means the reference (memory address) is passed, so changes inside a function affect the original.

function updatePerson(person) {
    person.age = person.age + 1; // This modifies the original object
    console.log("Inside function, updated person:", person);
    return person;
}

let myPerson = { name: "Alice", age: 30 };

console.log("Before function call, myPerson:", myPerson);

let modifiedPerson = updatePerson(myPerson);

console.log("After function call, myPerson:", myPerson);