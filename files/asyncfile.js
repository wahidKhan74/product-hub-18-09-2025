// file handlig for async operations
const fs = require('fs');
const path = require('path');
const os = require('os');

// Store inside project folder -> ./files/syncfile.json
const ASYNC_DIR = path.join(__dirname, "data");
const ASYNC_FILE = path.join(ASYNC_DIR, 'asyncfile.json');
const ASYNC_FILE_BACKUP = path.join(ASYNC_DIR, 'asyncfile_backup.json');

// Ensure the directory exists
if (!fs.existsSync(ASYNC_DIR)) {
    fs.mkdirSync(ASYNC_DIR, { recursive: true });
}

// Async read file
async function readAsyncFile() {
    try {
        if (fs.existsSync(ASYNC_FILE)) {
            const data = await fs.promises.readFile(ASYNC_FILE, 'utf-8');
            return JSON.parse(data);
        } else {
            return {};
        }
    } catch (error) {
        console.error('Error reading async file:', error);
        return {};
    }
}

// Async write file
async function writeAsyncFile(data) {
    try {
        await fs.promises.writeFile(ASYNC_FILE_BACKUP, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing async file:', error);
    }
}


async function appendAsyncFile(data) {
    try {
        await fs.promises.appendFile(ASYNC_FILE_BACKUP, os.EOL + JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error appending to async file:', error);
    }
}


// Demo usage:
(async () => {
    console.log("Reading async file...");
    let asyncData = await readAsyncFile();
    console.log("Current async data:", asyncData);
    console.log("Completed read async file...");

    console.log("-----------------------------------")
    console.log("Writing async file...");
    await writeAsyncFile(asyncData);
    console.log("Completed write async file...");

     console.log("-----------------------------------")
    console.log("Append async file...");
    await appendAsyncFile(asyncData);
    console.log("Completed append async file...");
})();