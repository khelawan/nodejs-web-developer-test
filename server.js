const http = require('http');

const app = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`This is the nodejs-web-developer-test server!`);
    response.end();
});
  
app.listen(3000);