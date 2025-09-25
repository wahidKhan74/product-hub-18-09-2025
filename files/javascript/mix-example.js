// Mixing Both (Tricky Case)
// If you reassign the parameter inside the function, 
// it breaks the reference (because the local variable points to a new object).

// Here the outside object didn’t change, because we created a new object instead of modifying the original one.

function resetUser(user) {
    user = {
        id: 100, name: "John Doe", email: "john.doe@gmail.com"
    };
    console.log("Inside function, user reset to:", user);
}

let currentUser = { id: 1, name: "Jane Smith", email: "jane@gmail.com" };

console.log("Before function call, currentUser:", currentUser);
resetUser(currentUser);
console.log("After function call, currentUser:", currentUser);

