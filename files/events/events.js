const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Subscribe(listen) to an event
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

eventEmitter.on('farewell', (name) => {
    console.log(`Goodbye, ${name}!`);
});


// Emit (Trigger) the event
eventEmitter.emit('greet', 'Alice');
eventEmitter.emit('farewell', 'Bob');
eventEmitter.emit('greet', 'Charlie');

