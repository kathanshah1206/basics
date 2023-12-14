const bodyParser = require("body-parser");
const express = require("express");
var cors = require("cors");

const app = express();
const port = 5500;
app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send('{"name":"John", "age":30, "car":null} ');
});

app.post("/appo", (req, res) => {
  let k = req.body;

  console.log(k);

  res.send("backend message sent ");
});

app.get("/appo", (req, res) => {
  let param = {
    age: 56,
    name: "pqr",
  };
  res.send(param);
});

app.listen(port, () => {
  console.log(`Server is running `);
});
