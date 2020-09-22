"use strict";

var express = require("express");

var app = express();

var cors = require("cors"); //middleware


app.use(cors());
app.use(express.json());
app.listen(5000, function () {
  console.log("app has started on port 5000");
});