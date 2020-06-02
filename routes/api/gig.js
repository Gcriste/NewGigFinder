module.exports = function(app) {
	const db = require('../../models');
	//POST request for gigs
	//creates a new gig
	app.post('/api/gig', (req, res) => {
		db.gig.create(req.body).then((gig) => res.json(gig)).catch((err) => console.log(err));
	});

	//GET request for gigs
	//gets all gigs
	app.get('/api/gig', (req, res) => {
		db.gig.findAll().then((gig) => res.json(gig)).catch((err) => console.log(err));
	});

	// GET request for gigs to find one by userid
	// find one by user id
	app.get('/api/gig/:userid', (req, res) => {
		db.gig
			.findAll({
				where: {
					userid: req.params.userid
				}
			})
			.then((gig) => res.json(gig))
			.catch((err) => console.log(err));
	});

	app.get('/api/gig/id/:id', (req, res) => {
		db.gig
			.findAll({
				where: {
					id: req.params.id
				}
			})
			.then((gig) => res.json(gig))
			.catch((err) => console.log(err));
	});

	// DELETE route for deleting posts
	app.delete('/api/gig/:id', (req, res) => {
		db.gig
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then((gig) => res.json(gig))
			.catch((err) => console.log(err));
	});
};
