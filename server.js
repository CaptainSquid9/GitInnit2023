<<<<<<< HEAD
const http = require('http');
const fs = require('fs');
const express = require('express')
const app = express();

app.use(express.static(__dirname + '/public'));

require("./puppeteer.js")


const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/') {
    fs.readFile('index.html', (error, data) => {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Error');
      } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
      }
    });
  } else if (request.method === 'GET' && request.url === '/result.html') {
    fs.readFile('result.html', (error, data) => {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Error');
      } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
      }
    });
  } else if (request.method === 'GET' && request.url === '/app.js') {
    fs.readFile('app.js', (error, data) => {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Error');
      } else {
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.end(data);
      }
    });
  }else if (request.method === 'GET' && request.url === '/puppeteer.js') {
    fs.readFile('puppeteer.js', (error, data) => {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Error');
      } else {
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.end(data);
      }
    });
  }else if (request.method === 'GET' && request.url === '/style.css') {
    fs.readFile('style.css', (error, data) => {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Error');
      } else {
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.end(data);
      }
    });
  }
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
=======
const http = require('http');
const fs = require('fs');
const express = require('express')
const app = express();

app.use(express.static(__dirname + '/public'));

require("./puppeteer.js")


const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/') {
    fs.readFile('index.html', (error, data) => {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Error');
      } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
      }
    });
  } else if (request.method === 'GET' && request.url === '/result.html') {
    fs.readFile('result.html', (error, data) => {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Error');
      } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
      }
    });
  } else if (request.method === 'GET' && request.url === '/app.js') {
    fs.readFile('app.js', (error, data) => {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Error');
      } else {
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.end(data);
      }
    });
  }else if (request.method === 'GET' && request.url === '/puppeteer.js') {
    fs.readFile('puppeteer.js', (error, data) => {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Error');
      } else {
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.end(data);
      }
    });
  }else if (request.method === 'GET' && request.url === '/style.css') {
    fs.readFile('style.css', (error, data) => {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Error');
      } else {
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.end(data);
      }
    });
  }
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
>>>>>>> 186a3124679a3c706354215366474ccf6fb9be8c
  });