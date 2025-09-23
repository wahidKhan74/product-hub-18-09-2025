// system for expiry checking of products
function checkExpiry(expiryDate) {
    const currentDate = new Date();
    return new Date(expiryDate) < currentDate;
}

function daysLeft(expiryDate) {
    const currentDate = new Date();
    const expDate = new Date(expiryDate);
    const diffTime = Math.abs(expDate - currentDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

module.exports = { checkExpiry, daysLeft };
