// Scenario: Calculating tax without affecting the original price  (pass by value)
function calculateTax(price) {
    const taxRate = 0.1;
    return price + (price * taxRate); // returns a new value
}

let originalPrice = 100;
let newPrice = calculateTax(originalPrice);
console.log("Original Price:", originalPrice); // 100
console.log("New Price with Tax:", newPrice); // 110


// Scenario: Calculating tax with affecting the original price  (pass by reference)
function applyTax(priceObj) {
    const taxRate = 0.1;
    priceObj.price += priceObj.price * taxRate; // modifies the original object
}

let priceDetails = { price: 100 };
applyTax(priceDetails);
console.log("Price after Tax:", priceDetails.price); // 110
