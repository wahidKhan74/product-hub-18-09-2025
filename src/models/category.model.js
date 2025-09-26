let categories = [
  { id: 1, name: "Smartphones" },
  { id: 2, name: "Headphones" }
];

// CRUD operations for categories
function getAll() { return categories; }

function getById(id) { return categories.find(c => c.id === id); }

function create(category) {
  const id = categories.length ? categories[categories.length - 1].id + 1 : 1;
  category.id = id;
  categories.push(category);
  return category;
}

function update(id, updatedCategory) {
    const index = categories.findIndex(c => c.id === id);
    if (index !== -1) {
        categories[index] = { id, ...updatedCategory };
        return categories[index];
    }
}   

function remove(id) {
    const index = categories.findIndex(c => c.id === id);
    if (index !== -1) {
        return categories.splice(index, 1)[0];
    }
    return null;
}


module.exports = { getAll, getById, create , update, remove };
