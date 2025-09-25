// call :: Borrowing Method with call()
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(city) {
        return this.firstName + " " + this.lastName + " from " + city;
    }
};

let anotherPerson = {
    firstName: "Jane",
    lastName: "Smith"
};

console.log(person.fullName.call(anotherPerson, "New York")); // Jane Smith from New York