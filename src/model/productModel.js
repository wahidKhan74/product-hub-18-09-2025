let products = [
    { id: 1, name: "Apple iPhone 15 Pro", price: 1199 },
    { id: 2, name: "Samsung Galaxy S23 Ultra", price: 1099 },
    { id: 3, name: "Sony WH-1000XM5 Headphones", price: 399 },
    { id: 4, name: "Apple MacBook Air M2", price: 1299 },
    { id: 5, name: "Dell XPS 13 Laptop", price: 999 },
    { id: 6, name: "Logitech MX Master 3S Mouse", price: 129 },
    { id: 7, name: "Apple iPad Pro 12.9\"", price: 1099 },
    { id: 8, name: "Samsung 55\" QLED 4K TV", price: 799 },
    { id: 9, name: "Amazon Echo Dot (5th Gen)", price: 49 },
    { id: 10, name: "Nikon Z6 II Camera", price: 1999 }
];

function getAll() {
    return products;
}

function getById(id) {
    return products.find(p => p.id === id);;
}

function add(product) {
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    product.id = id;
    products.push(product);
}

function remove(id) {
    products = products.filter(p => p.id !== id);
}

module.exports = {
    getAll,
    getById,
    add,
    remove
};