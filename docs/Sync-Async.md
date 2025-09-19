ASYNC AND NON-BLOCKING I/O IN NODE.JS
-------------------------------------
1. Node.js is single-threaded but uses an event loop to handle multiple tasks.
2. Non-blocking I/O means Node.js does not wait for one operation to finish before starting another.
3. Asynchronous code uses callbacks, promises, or async/await to handle results when ready.
4. This makes Node.js efficient for I/O-heavy tasks (API calls, DB queries, file handling).