const express = require("express");
const app = express();
require("./database/connection");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(1000, () => {
  console.log("Server is running on port 1000");
});
