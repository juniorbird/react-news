'use strict';
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  if (request.url.substring(1) === 'app.min.js') {
    fs.readFile('./dist/app.min.js', (error, data) => response.end(error || data));
  } else {
    fs.readFile('./dist/index.html', (error, data) => response.end(error || data));
  }
}).listen(process.env.PORT || 3000);
