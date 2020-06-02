module.exports = function(sequelize, Sequelize) {
	const Gig = sequelize.define('gig', {
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4
		},
		musician: { type: Sequelize.STRING, allowNull: false },
		pay: { type: Sequelize.INTEGER, allowNull: false },
		venue: { type: Sequelize.STRING, allowNull: false },
		bandname: { type: Sequelize.STRING },
		musictype: { type: Sequelize.STRING, allowNull: false },
		date: { type: Sequelize.DATE, allowNull: false },
		starttime: { type: Sequelize.STRING, allowNull: false },
		endtime: { type: Sequelize.STRING, allowNull: false },
		userid: { type: Sequelize.STRING },
		request: { type: Sequelize.STRING }
	});

	return Gig;
};
