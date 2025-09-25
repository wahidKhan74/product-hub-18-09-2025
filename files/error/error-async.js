// Asynchronous Code (Callbacks)  : Error Handling : Using error-first callbacks

const fs = require('fs');

function readFileAsync(filePath) {

    // Using error-first callback pattern
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("File read error:", err.message);
            return;
        }
        console.log("File content:", data);
    });
}

// Example usage:
const validFilePath = 'valid.txt'; // Ensure this file exists with some content
const invalidFilePath = 'invalid.txt'; // This file does not exist

readFileAsync(validFilePath);   // Should log the file content
readFileAsync(invalidFilePath); // Should log an error message

console.log("-----------------------------------------------");

// Asynchronous Code (Promises)  : Error Handling : Using .catch() with Promises
function fetchData(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("Fetched Data:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error.message);
    });
}

// Example usage:
const validURL = 'https://jsonplaceholder.typicode.com/posts/1';
const invalidURL = 'https://invalidurl.example.com';

fetchData(validURL);   // Should log the fetched data
fetchData(invalidURL); // Should log an error message


console.log("-----------------------------------------------");
// Asynchronous Code (async/await)  : Error Handling : Using try...catch with async/await

async function fetchDataAsync(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched Data (async/await):", data);
    } catch (error) {
        console.error("Fetch error (async/await):", error.message);
    }
}

// Example usage:
fetchDataAsync(validURL);
fetchDataAsync(invalidURL);
