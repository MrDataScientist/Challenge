const express = require("express");
const data = require("./data/cases.js");

const app = express();
const port = 5000;

app.listen(port, () => {
  app.use("/studies", data);
  console.log("Server is live on port " + port);
});
