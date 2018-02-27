//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//sets up express app
var app = express();
var PORT = 3000;

//sets up express app to handle data parsing
app.use(bodyParser.unlencoded({ extended: false}));
app.user(bodyParser.json());

var friends = [];

//routes
//basic route that sends the user first to the AJAX page
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

