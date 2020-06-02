module.exports = function(sequelize, Sequelize) {
	const Discussion = sequelize.define('discussion', {
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4
		},
		text: { type: Sequelize.STRING, allowNull: false },
		name: { type: Sequelize.STRING, allowNull: false },
		date: { type: Sequelize.DATE },
		userid: { type: Sequelize.STRING },
		avatar: { type: Sequelize.STRING }
	});

	Discussion.associate = function(models) {
		// Associating Discussion with Comments
		// When a Discussion is deleted, also delete any associated Comments
		Discussion.hasMany(models.comment, {
			onDelete: 'cascade'
		});
	};

	return Discussion;
};
