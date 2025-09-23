const logger = require('./logger');

// Example usage
logger.info('Logger initialized successfully.');
logger.debug('This is a debug message.');
logger.error('This is an error message.');
logger.warn('This is a warning message.');
logger.verbose('This is a verbose message.');
logger.info('Application started.');
logger.info(`Application Name: ${require('./config').appName}`);
logger.info(`Application Version: ${require('./config').version}`);
logger.info('This is an info message.');
logger.debug('This is a debug message.');
logger.error('This is an error message.');
logger.warn('This is a warning message.');
logger.verbose('This is a verbose message.');
logger.info('Application finished execution.');



