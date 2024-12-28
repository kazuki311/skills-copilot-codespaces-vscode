// Create web server that listens on port 3000. When the server receives a request to the root URL, it should respond with the following content: "Hello, World!". 
// Use the createServer method from the http module to create the server. 
// Use the listen method to start the server and make it listen on port 3000. 
// Use the writeHead method to set the content type to text/plain. 
// Use the end method to send the response to the client. 

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.  When you navigate to http://localhost:3000/comments, the server should respond with the comments.html file. The comments.html file should be in the same directory as the comments.js file.                         
// Use the fs module to read the comments.html file and send it as a response to the client.            
// If the client requests a different URL, the server should respond with a 404 status code and the following message: "Page not found".   

