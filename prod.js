'use strict';
const http = require('http');
const fs = require('fs');

let file;
let header;


http.createServer((request, response) => {
  if (request.url.substring(1) === 'app.min.js') {
    header = { 'Content-Type': 'text/html' };
    file = './dist/app.min.js';
  } else if (request.url.substring(1) === 'favicon.png') {
    header = { 'Content-Type': 'image/png' };
    file = './favicon.png';
  } else {
    header =  { 'Content-Type': 'text/html' };
    file = './dist/index.html';
  }

  response.writeHead(200,  header);
  fs.readFile(file, (error, data) => response.end(error || data));
  
}).listen(process.env.PORT || 3000);
