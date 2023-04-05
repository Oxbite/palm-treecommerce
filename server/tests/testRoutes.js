const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.sendFile("test.html", { root: __dirname });
});

module.exports = route;
