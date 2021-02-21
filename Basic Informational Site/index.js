// app.js
const url=require('url')
const fs=require('fs')
const http = require('http');

// Create an instance of the http server to handle HTTP requests
let server= http.createServer((req, res) => {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    
   

    fs.readFile(`index.html`, function (err, data) {
      res.write(data);
      return res.end();
    });
   
});

// Start the server on port 3000
server.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');



