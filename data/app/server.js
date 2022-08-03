const http = require("http");
const fs = require("fs");
const port = 5000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  //   res.write("<h1>hello world</h1>");
  fs.readFile("./view/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`your server is runnig  http://localhost:${port}`);
});
