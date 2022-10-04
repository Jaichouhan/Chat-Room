const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.set("view engine", "ejs");
const mongodb = "mongodb://localhost:27017";
// const fs = require("fs");
const port = 8000;
const hostname = "localhost";
app.use(express.urlencoded({ extended: true }));

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
  res.redirect("/get-items");
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
    .then((data) => {
      res.render("index", { items: data });
    })
    .catch((err) => console.log(err));
});
// app.get("/get-item", (req, res) => {
//   data
//     .findById("62ea657795fe3767e1e3001c")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// });

app.post("/items", (req, res) => {
  console.log(req.body);
  const item = data(req.body);
  item
    .save()
    .then(() => {
      res.redirect("/get-items");
    })
    .catch((err) => console.log(err));
});

app.get("/items/:id", (req, res) => {
  const id = req.params.id;
  data
    .findById(id)
    .then((result) => {
      res.render("item-deatils", { item: result });
    })
    .catch((err) => console.log(err));
});

app.delete("/items/:id", (req, res) => {
  const id = req.params.id;
  data
    .findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/get-items" });
    })
    .catch((err) => console.log(err));
});

app.put("/items/:id", (req, res) => {
  const id = req.params.id;
  data
    .findByIdAndUpdate(id, req.body)
    .then((result) => {
      res.json({ msg: "updated successfully " });
    })
    .catch((err) => console.log(err));
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.use((req, res) => {
  res.render("404");
});
