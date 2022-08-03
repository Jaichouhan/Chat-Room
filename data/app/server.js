// const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.set("view engine", "ejs");
const mongodb =
  "mongodb+srv://jaichouhan:1ap7R5L3xiPz4Pa5@cluster0.7wnnt.mongodb.net/?retryWrites=true&w=majority";
// const fs = require("fs");
const port = 8000;
const hostname = "localhost";

const data = require("./modules/item");

mongoose
  .connect(mongodb, { useNewUrlParser: true })
  .then(() => {
    console.log("connected");
    app.listen(port, hostname, () => {
      console.log(`your server is listing http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  //   res.sendFile(`./views/index.ejs`, { root: __dirname });
  const items = [
    {
      name: "jon doa",
      price: 150,
    },
    {
      name: "ram doa",
      price: 50,
    },
    {
      name: "honey doa",
      price: 25,
    },
  ];
  res.render("index", { items });
});

app.get("/create-item", (req, res) => {
  const item = new data({
    name: "computer",
    price: 10000,
  });
  item
    .save()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});
app.get("/get-items", (req, res) => {
  data
    .find()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});
app.get("/get-item", (req, res) => {
  data
    .findById("62ea657795fe3767e1e3001c")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

app.get("/contact", (req, res) => {
  //   res.sendFile(`./views/contact.ejs`, { root: __dirname });
  res.render("contact");
});

app.use((req, res) => {
  //   res.sendFile(`./views/404.ejs`, { root: __dirname });
  res.render("404");
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
