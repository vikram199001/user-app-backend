const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connection } = require("./config");

const app = express();
app.use(express.json());
// app.use(fileupload());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  bodyParser.json({
    limit: "100mb",
  })
);

app.use(
  cors({
    origin: "*",
  })
);

connection.connect(function(err) {
if (err) throw err;
console.log("Connected!");
// const sql = `CREATE TABLE IF NOT EXISTS users (
//                   id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
//                   lastName VARCHAR(255),
//                   firstName VARCHAR(255),
//                   email VARCHAR(255),
//                   city VARCHAR(255)
//                 )`;
// connection.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("User table created");
// });   
});
app.use("/users", require("./users/users.controller"));
app.use("/", (req, res) => {
  res.send("test api");
  console.log("Test api");
});

const PORT = 5000;

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port somethning", PORT);
});
