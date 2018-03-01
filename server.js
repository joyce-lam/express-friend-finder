//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//sets up express app
var app = express();
var PORT = process.env.PORT || 3000;

//sets up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

