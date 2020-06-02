module.exports = function(app) {
	const db = require('../../models');

	// GET route for getting all of the comments
	app.get('/api/comment', (req, res) => {
		var query = {};
		if (req.query.discussion_id) {
			query.discussionId = req.query.discussion_id;
		}
		// Here we add an "include" property to our options in our findAll query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.discussion
		db.comment
			.findAll({
				where: query,
				include: [ db.discussion ]
			})
			.then((comment) => res.json(comment));
	});

	// Get route for retrieving a single comment
	app.get('/api/comment/:id', (req, res) => {
		// Here we add an "include" property to our options in our findOne query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.discussion
		db.comment
			.findOne({
				where: {
					id: req.params.id
				},
				include: [ db.discussion ]
			})
			.then((comment) => res.json(comment));
	});

	// Get route for retrieving comments based on discussion
	app.get('/api/comment/discussion/:discussionId', (req, res) => {
		// Here we add an "include" property to our options in our findOne query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.discussion
		db.comment
			.findAll({
				where: {
					discussionId: req.params.discussionId
				},
				include: [ db.discussion ]
			})
			.then((comment) => res.json(comment));
	});

	// POST route for saving a new comment
	app.post('/api/comment', (req, res) => {
		db.comment.create(req.body).then((comment) => res.json(comment));
	});

	// DELETE route for deleting comments
	app.delete('/api/comment/:id', (req, res) => {
		db.comment
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then((comment) => res.json(comment));
	});

	// PUT route for updating comments
	app.put('/api/comment', (req, res) => {
		db.comment
			.update(req.body, {
				where: {
					id: req.body.id
				}
			})
			.then((comment) => res.json(comment));
	});
};
