const fs = require("fs");
const users = require("./users");
// setTimeout(() => {
//   console.log("first without global");
// }, 3000);

// global.setTimeout(() => {
//   console.log("first");
// }, 3000);

// console.log(users.users);

//read file
// fs.readFile("./data/note.txt", (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res.toString());
//   }
// });

//write file
// fs.writeFile("./data/note.txt", "hello jai", (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("a new created");
//   }
// });

// append file
// fs.appendFile("./data/note.txt", "hello jai chouhan\r\n", (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("a new created");
//   }
// });

//create folder
// if (!fs.existsSync("newFolder")) {
//   fs.mkdir("newFolder", (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("a new folder");
//     }
//   });
// } else {
//   console.log("the folder already exist");
// }

//delect folder
// if (fs.existsSync("newFolder")) {
//   fs.rmdir("newFolder", (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("a  folder deleted");
//     }
//   });
// } else {
//   console.log("the folder already deleted");
// }
//delect file
// if (fs.existsSync("./data/note.txt")) {
//   fs.unlink("./data/note.txt", (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("a  file deleted");
//     }
//   });
// } else {
//   console.log("the file already deleted");
// }

//starem
const readStream = fs.createReadStream("large.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("writeStream.txt");
// readStream.on("data", (chunk) => {
//   console.log("chunk chunk");
//   console.log(chunk);

//   writeStream.write(`\n ######### \n`);
//   writeStream.write(chunk);
// });
//stream.pipe()
readStream.pipe(writeStream);
