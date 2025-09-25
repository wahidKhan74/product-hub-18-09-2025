// Pass by Value in JS (Primitives)
// In JavaScript, primitives (like numbers, strings, booleans, null, undefined) are passed by value.
// That means a copy of the value is passed to the function, and changing it won’t affect the original.

function updateAge(age) {
    age = age + 1; // This modifies the local copy of age
    console.log("Inside function, updated age:", age);
    return age;
}

let myAge = 25;
console.log("Before function call, myAge:", myAge);
let newAge = updateAge(myAge);
console.log("After function call, myAge:", myAge); // myAge remains unchanged
console.log("Returned newAge from function:", newAge); // newAge is the updated value