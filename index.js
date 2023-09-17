const http = require('http');
const PORT = 4000;

const server = http.createServer((req, res) => {
  res.end('Hello World')
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})