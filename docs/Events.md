What is an Event in Node.js?
- An event is a signal that something has happened in your program (like a file is read, a request arrived, or a button is clicked).
- Node.js runs on the Event-Driven Architecture → instead of blocking, it listens for events and triggers callbacks (event handlers).
- It uses the Observer Pattern (publish-subscribe).

2. EventEmitter (Event Management in Node.js)

- Node.js has a built-in module called events.
- The EventEmitter class lets you:
    - Emit (trigger) events.
    - Listen (subscribe) to events.
    - Handle multiple listeners for the same event.

👉 Think of it like a radio station (emitter) and listeners (subscribers).