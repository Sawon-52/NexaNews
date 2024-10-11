const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.port;

app.get("/", (req, res) => {
  res.send("Hi this a server that i crated it");
});

app.listen(port, () => {
  console.log(`Server is Running  ${port}`);
});
