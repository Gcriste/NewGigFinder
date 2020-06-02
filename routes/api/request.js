module.exports = function(app) {
	const db = require('../../models');
	//POST request for gigs
	//creates a new gig
	app.post('/api/request', (req, res) => {
		db.request.create(req.body).then((request) => res.json(request)).catch((err) => console.log(err));
	});

	// GET request for requests
	// gets all requests
	app.get('/api/request', (req, res) => {
		db.request.findAll().then((request) => res.json(request)).catch((err) => console.log(err));
	});

	// GET request for gigs to find one by userid
	// find one by user id
	app.get('/api/request/:userid', (req, res) => {
		db.request
			.findAll({
				where: { userid: req.params.userid }
			})
			.then((request) => res.json(request))
			.catch((err) => console.log(err));
	});

	// GET request for gigs to find one by gigid
	// find one by gig id
	app.get('/api/request/gig/:gigid', (req, res) => {
		db.request
			.findAll({
				where: { gigid: req.params.gigid }
			})
			.then((request) => res.json(request))
			.catch((err) => console.log(err));
	});

	// DELETE route for deleting posts
	app.delete('/api/request/:id', (req, res) => {
		db.request
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then((gig) => res.json(gig))
			.catch((err) => console.log(err));
	});
};
