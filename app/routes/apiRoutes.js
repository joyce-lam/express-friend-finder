var friendsData = require("../data/friends");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});

	app.post("/api/friends", function(req, res) {
		var body = req.body;
		// assume valid req and clean up strings
		for (var i = 0; i < body.scores.length; i++) {
			body.scores[i] = parseInt(body.scores[i]);
		}
		friendsData.push(body);
		res.json(true);
	});

};