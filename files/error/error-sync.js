// Error Handling Approaches  : 1) Synchronous : Using try...catch

function parseJSON(jsonString) {
    try {
        const parsedData = JSON.parse(jsonString);
        console.log("Parsed Data:", parsedData);
    } catch (error) {
        console.error("Error parsing JSON:", error.message);
    }
}

// Example usage:
const validJSON = '{"name": "Alice", "age": 30}';
const invalidJSON = '{"name": "Alice", "age": 30'; // Missing closing brace

parseJSON(validJSON);   // Should log the parsed data
parseJSON(invalidJSON); // Should log an error message