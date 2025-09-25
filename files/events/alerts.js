const  alerts = require('./expiry-alerts');


// List of medications with their expiry dates and stock levels
const medications = [
    { name: 'Aspirin', expiryDate: '2024-07-01', stock: 5 },
    { name: 'Ibuprofen', expiryDate: '2024-08-15', stock: 2 },
    { name: 'Paracetamol', expiryDate: '2024-06-20', stock: 10 },
];


// Check for expiring medications
alerts.checkForExpiringMedications(medications);
alerts.checkForExpiringMedications(medications);
alerts.checkForLowStockMedications(medications);

