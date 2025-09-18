const http = require('http');
const port = 3000;
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain' );
    
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200);
        res.end(`Hello, Http Server is up and running on port ${port} \n`);
    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200);
        res.end('This is About Page');
    } else if (req.url === '/contact' && req.method === 'GET') {
        res.writeHead(200);
        res.end('This is Contact Page');
    } else if (req.url === '/user' && req.method === 'GET') {
        const user = {
            name: 'John Doe',
            age: 30,
            email: 'john@gmail.com'
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }

}).listen(3000);

console.log(`Server running at http://localhost:${port}/`);