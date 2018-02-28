//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//sets up express app
var app = express();
var PORT = process.env.PORT || 3000;

//sets up express app to handle data parsing
app.use(bodyParser.unlencoded({ extended: false}));
app.user(bodyParser.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

