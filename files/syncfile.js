// file handlig for sync operations
const fs = require('fs');
const path = require('path');
const os = require('os');

// Store inside project folder -> ./files/syncfile.json
const SYNC_DIR = path.join(__dirname, "data");
const SYNC_FILE = path.join(SYNC_DIR, 'syncfile.json');
const SYNC_FILE_BACKUP = path.join(SYNC_DIR, 'syncfile_backup.json');

function readSyncFile() {
    try {
        if (fs.existsSync(SYNC_FILE)) {
            const data = fs.readFileSync(SYNC_FILE, 'utf-8');
            return JSON.parse(data);
        } else {
            return {};
        }
    } catch (error) {
        console.error('Error reading sync file:', error);
        return {};
    }
}

function writeSyncFile(data) {
    try {
        fs.writeFileSync(SYNC_FILE_BACKUP, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing sync file:', error);
    }
}

// Demo usage:

console.log("Reading sync file...");
let syncData = readSyncFile();
console.log("Current sync data:", syncData);
console.log("Completed read sync file...");


console.log("Writing sync file...");
writeSyncFile(syncData);
console.log("Writing read sync file...");
