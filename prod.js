'use strict';
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  if (request.url.substring(1) === 'app.min.js') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./dist/app.min.js', (error, data) => response.end(error || data));
  } else if (request.url.substring(1) === 'favicon.png') {
    response.writeHead(200, { 'Content-Type': 'image/png' });
    fs.readFile('favicon.png', (error, data) => response.end(error || data));
  } else {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./dist/index.html', (error, data) => response.end(error || data));
  }
}).listen(process.env.PORT || 3000);
