const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Subscribe to the 'expiryAlert' event
// .on(event, listener) → the preferred, modern method.
// .addListener(event, listener) → older method (still valid, alias of .on()).
// Both stay active until removed with .off() / .removeListener().
eventEmitter.on('expiryAlert', (itemName, expiryDate) => {
    console.log(`Alert: The item "${itemName}" is expiring on ${expiryDate}.`);
});

eventEmitter.on('refillReminder', (itemName, stock) => {
    console.log(`Reminder: The item "${itemName}" is low on stock. 
        Current stock: ${stock}. Please consider refilling.`);
});

eventEmitter.on('refillReminder', (itemName, stock) => {
    console.log(`(Additional Listener) Reminder: The item "${itemName}" is low on stock.
        Current stock: ${stock}. Please consider refilling.`);
});

const currentDate = new Date('2025-09-23');
const lowStockThreshold = 3;

// Function to check for expiring medications
function checkForExpiringMedications(medications) {
    medications.forEach(med => {
        const expiryDate = new Date(med.expiryDate);
        const timeDiff = expiryDate - currentDate;
        const daysToExpiry = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        // If the medication is expiring within the next 30 days, emit an alert
        if (daysToExpiry <= 30 && daysToExpiry >= 0) {
            eventEmitter.emit('expiryAlert', med.name, med.expiryDate);
        }
    });
}

// Function to check for low stock medications
function checkForLowStockMedications(medications) {
    medications.forEach(med => {
        if (med.stock <= lowStockThreshold) {
            eventEmitter.emit('refillReminder', med.name, med.stock);
        }
    });
}

module.exports = {
    checkForExpiringMedications,
    checkForLowStockMedications
};
