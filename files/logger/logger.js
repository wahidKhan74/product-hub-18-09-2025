const fs = require('fs');
const path = require('path');
const config = require('./config');

// Ensure log directory exists
const logDir = path.dirname(config.logFilePath);
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

const logLevels = ['error', 'warn', 'info', 'verbose', 'debug'];
const currentLogLevelIndex = logLevels.indexOf(config.logLevel);

function shouldLog(level) {
    return logLevels.indexOf(level) <= currentLogLevelIndex;
}

function log(level, message) {
    if (!shouldLog(level)) return;  // Skip logging if level is too low
    // Format log message
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] - [${level.toUpperCase()}] - ${message}\n`;

    // Log to file
    fs.appendFileSync(config.logFilePath, logMessage, 'utf8');

    // Rotate logs if necessary
    rotateLogs();

    // Log to console if enabled
    if (config.consoleLogging) {
        console.log(logMessage.trim());
    }
}

function rotateLogs() {
    const stats = fs.statSync(config.logFilePath);
    if (stats.size >= config.maxLogSize) {
        for (let i = config.maxLogFiles - 1; i > 0; i--) {
            const oldLog = `${config.logFilePath}.${i}`;
            const newLog = `${config.logFilePath}.${i + 1}`;
            if (fs.existsSync(oldLog)) {
                fs.renameSync(oldLog, newLog);
            }
        }
        fs.renameSync(config.logFilePath, `${config.logFilePath}.1`);
        fs.writeFileSync(config.logFilePath, '', 'utf8');
    }
}

module.exports = {
    error: (msg) => log('error', msg),
    warn: (msg) => log('warn', msg),
    info: (msg) => log('info', msg),
    verbose: (msg) => log('verbose', msg),
    debug: (msg) => log('debug', msg)
};

