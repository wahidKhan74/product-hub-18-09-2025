// Create a reusable logger function
function logger(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] - ${message}`);
}

// Export the logger function
module.exports = logger;
