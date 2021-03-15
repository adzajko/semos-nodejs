require('dotenv').config();
const http = require('http');
const { readDataFromFile, writeDataToFile } = require('./fileSystem');

const port = process.env.PORT || 3000;

const app = http.createServer((req, res) => {
  if (req.url === '/files') {
    if (req.method === 'GET') {
      readDataFromFile(response => {
        res.writeHead(200);
        res.end(JSON.stringify(response));
      });
    } else if (req.method === 'POST') {
      let body = '';
      req
        .on('data', chunk => {
          body += chunk;
        })
        .on('end', () => {
          writeDataToFile(body, response => {
            res.writeHead(201);
            res.end(JSON.stringify(response));
          });
        });
    }
  } else {
    res.writeHead(404, 'Not Found');
    res.end('NOT FOUND!');
  }
});

app.listen(port, () => {
  console.log('Lol');
});
