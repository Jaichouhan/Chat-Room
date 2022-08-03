// const http = require("http");
const express = require("express");
const app = express();
// const fs = require("fs");
const port = 8000;
const hostname = "localhost";

app.get("/", (req, res) => {
  res.sendFile(`./views/index.html`, { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile(`./views/contact.html`, { root: __dirname });
});

app.use((req, res) => {
  res.sendFile(`./views/404.html`, { root: __dirname });
});
app.listen(port, hostname, () => {
  console.log(`your server is listing http://localhost:${port}`);
});

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   let route = "./views";
//   switch (res.url) {
//     case "/":
//       route += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/contact.html":
//       route += "contact.html";
//       res.statusCode = 200;
//       break;
//     case "/404":
//       route += "404.html";
//       res.statusCode = 200;
//       break;
//   }
//   res.write("<h1>hello world</h1>");
//   fs.readFile(route, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.write(data);
//       res.end(data);
//     }
//   });
//   res.end();
// });

// server.listen(port, hostname, () => {
//   console.log(`your server is runnig  http://localhost:${port}`);
// });
