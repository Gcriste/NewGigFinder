module.exports = function(app) {
	const db = require('../../models');
	//POST request for gigs
	//creates a new gig
	app.post('/api/discussion', (req, res) => {
		db.discussion.create(req.body).then((discussion) => res.json(discussion)).catch((err) => console.log(err));
	});

	app.get('/api/discussion', (req, res) => {
		// Here we add an "include" property to our options in our findAll query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.comment
		db.discussion
			.findAll({
				include: [ db.comment ]
			})
			.then((discussion) => res.json(discussion));
	});

	app.get('/api/discussion/:id', (req, res) => {
		// Here we add an "include" property to our options in our findOne query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.comment
		db.discussion
			.findOne({
				where: {
					id: req.params.id
				},
				include: [ db.comment ]
			})
			.then((discussion) => res.json(discussion));
	});

	// // PUT route for updating discussions
	// app.put('/api/discussion', (req, res) => {
	// 	db.discussion
	// 		.update(req.body, {
	// 			where: {
	// 				id: req.body.id
	// 			}
	// 		})
	// 		.then((discussion) => res.json(discussion));
	// });

	// DELETE route for deleting posts
	app.delete('/api/discussion/:id', (req, res) => {
		db.discussion
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then((discussion) => res.json(discussion))
			.catch((err) => console.log(err));
	});
};
