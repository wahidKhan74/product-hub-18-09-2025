const logger = require('./logger');
const config = require('./config');
const expiry = require('./expiryChecker');


// Use the logger function
logger('This is a log message from main.js');
logger('Logging another message for demonstration.');
logger('Logger function is working as expected.');
logger('End of logging demonstration.');
console.log('====================================');

// Display configuration details
console.log('Application Configuration:');
console.log(`App Name: ${config.appName}`);
console.log(`Version: ${config.version}`);
console.log(`Server Port: ${config.port}`);
console.log('Database Configuration:', config.db);
console.log('API Endpoints:', config.apiEndpoints);

console.log('====================================');

// Check expiry of a sample product
const sampleExpiryDate = '2025-12-31';
if (expiry.checkExpiry(sampleExpiryDate)) {
    console.log(`The product expired on ${sampleExpiryDate}.`);
} else {
    const days = expiry.daysLeft(sampleExpiryDate);
    console.log(`The product is valid. Days left until expiry: ${days}`);
}
