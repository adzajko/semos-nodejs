require('dotenv').config();
const http = require('http');

const port = process.env.PORT || 3000;

/**
 * Initiating the http server as well as adding a request listener.
 */
const app = http.createServer((request, response) => {
    const segmentedUrl = request.url.split('?');
    const defaultUrl = segmentedUrl[0];
    const queryParams = segmentedUrl[1];

    /**
     * ES6 Shorthand syntax for an object literal, to show both the name of the property AND its value
     */
    // console.log({defaultUrl});
    // console.log({queryParams});
    /**
     * Router for a get request sent on localhost:3000/files
     */
  if (request.method === 'GET' && request.url === '/files') {
    response.writeHead(200);
    response.end();
  } else if (request.method === 'POST' && request.url === '/files') {
      let body = '';
      request.on('data', (chunk) => {
          body += chunk;
      }).on('end', () => {
          console.log(body);
          response.writeHead(201);
          response.end(body);
      })
  } else {
    response.writeHead(404);
    response.end('Not Found');
  }
});


app.listen(port, () => {
  console.log('Server started!');
});
