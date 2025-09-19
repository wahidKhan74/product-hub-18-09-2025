HTTP REQUEST AND RESPONSE IN NODE.JS (EXPRESS)

-----------------------------------
HTTP REQUEST
-----------------------------------
Client sends a request to the server.

Key parts:
1. Resource URL      -> The endpoint being accessed (e.g. /users/123?active=true)
2. Method            -> HTTP verb (GET, POST, PUT, DELETE, PATCH)
3. Headers           -> Metadata (Content-Type, Authorization, Accept)
4. Path Variables    -> Dynamic parts of URL (/users/:id -> req.params.id)
5. Query Parameters  -> Key-value pairs after ? in URL (/users?active=true -> req.query.active)
6. Body              -> Data sent in request (POST/PUT/PATCH) -> req.body

-----------------------------------
HTTP RESPONSE
-----------------------------------
Server replies to the client.

Key parts:
1. Status Code       -> Numeric result of request (200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error)
2. Headers           -> Metadata about response (Content-Type: application/json)
3. Body              -> Actual data returned (JSON, HTML, text, file, etc.)


-----------------------------------
EXPRESS EXAMPLE
-----------------------------------
app.get('/users/:id', (req, res) => {
  // Request
  console.log(req.method);        // GET
  console.log(req.params.id);     // Path variable
  console.log(req.query.active);  // Query param
  console.log(req.headers);       // Headers

  // Response
  res.status(200).json({
    id: req.params.id,
    active: req.query.active,
    message: "User details fetched successfully"
  });
});