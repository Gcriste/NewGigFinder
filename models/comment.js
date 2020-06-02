module.exports = function(sequelize, Sequelize) {
	const Comment = sequelize.define('comment', {
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4
		},
		userid: { type: Sequelize.STRING },
		text: { type: Sequelize.STRING, allowNull: false },
		name: { type: Sequelize.STRING, allowNull: false },
		avatar: { type: Sequelize.STRING },
		date: { type: Sequelize.DATE }
	});

	Comment.associate = function(models) {
		// We're saying that a comment should belong to an discussion
		// A comment can't be created without a discussion due to the foreign key constraint
		Comment.belongsTo(models.discussion, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Comment;
};
