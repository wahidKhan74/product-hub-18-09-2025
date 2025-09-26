let orders = [];

// CRUD operations for orders
function getAll() { return orders; }

function getById(id) { return orders.find(o => o.id === id); }

function create(order) {
  const id = orders.length ? orders[orders.length - 1].id + 1 : 1;
  order.id = id;
  order.createdAt = new Date();
  orders.push(order);
  return order;
}

function update(id, updatedOrder) {
    const index = orders.findIndex(o => o.id === id);
    if (index !== -1) {
        orders[index] = { id, ...updatedOrder };
        return orders[index];
    }
    return null;
}

function remove(id) {
    const index = orders.findIndex(o => o.id === id);
    if (index !== -1) {
        return orders.splice(index, 1)[0];
    }
    return null;
}


module.exports = { getAll, getById, create, update, remove };
