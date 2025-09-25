//apply :: Borrowing Method with apply()
const customer = {
    name: "Alice",
    balance: 5000,
    getDetails: function(city, country) {
        return this.name + " has a balance of $" + this.balance + " from " + city + ", " + country;
    }
};

const anotherCustomer = {
    name: "Bob",
    balance: 3000
};

console.log(customer.getDetails.apply(anotherCustomer, ["Los Angeles", "USA"])); 
// Bob has a balance of $3000 from Los Angeles, USA