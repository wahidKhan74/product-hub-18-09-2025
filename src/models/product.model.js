let products = [
  { id: 1, name: "Apple iPhone 15 Pro", price: 1199, categoryId: 1 },
  { id: 2, name: "Samsung Galaxy S23 Ultra", price: 1099, categoryId: 1 },
  { id: 3, name: "Sony WH-1000XM5 Headphones", price: 399, categoryId: 2 }
];

// CRUD operations 
// Get all products
function getAll() { return products; }

// Get product by ID
function getById(id) { return products.find(p => p.id === id); }

// Add a new product
function create(product) {
  const id = products.length ? products[products.length - 1].id + 1 : 1;
  product.id = id;
  products.push(product);
  return product;
}

// Update a product
function update(id, updatedProduct) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index] = { id, ...updatedProduct };
        return products[index];
    }
    return null;
}
// Delete a product
function remove(id) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        return products.splice(index, 1)[0];
    }
    return null;
}

module.exports = { getAll, getById, create, update, remove };