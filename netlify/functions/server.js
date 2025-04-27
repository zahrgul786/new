const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.set('view engine', "ejs")
app.set('views')
app.get("/", (req, res) => {
  res.render("index");
});


module.exports.handler = serverless(app);