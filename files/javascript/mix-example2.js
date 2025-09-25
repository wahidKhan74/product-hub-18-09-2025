function addItems(cartItems, totalPrice, item) {
    cartItems.push(item); // affect original array (cartItems is passed by reference)
    totalPrice += item.price; // does not affect original totalPrice (primitive passed by value)
    console.log("Inside function, cartItems:", cartItems);
    console.log("Inside function, totalPrice:", totalPrice);
    return totalPrice; // return the new totalPrice
}

let cartItems = [{ id: 1, name: "Book", price: 10 }];
let totalPrice = 10;

console.log("Before function call, cartItems:", cartItems);
console.log("Before function call, totalPrice:", totalPrice);

let newItem = { id: 2, name: "Pen", price: 2 };

let newTotalPrice = addItems(cartItems, totalPrice, newItem);

console.log("After function call, cartItems:", cartItems); // cartItems is modified
console.log("After function call, totalPrice:", totalPrice); // totalPrice remains unchanged
console.log("Returned newTotalPrice from function:", newTotalPrice); // newTotalPrice is the updated value