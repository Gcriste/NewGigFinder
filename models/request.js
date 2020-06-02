module.exports = function(sequelize, Sequelize) {
	const Request = sequelize.define('request', {
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4
		},
		firstName: { type: Sequelize.STRING, allowNull: false },
		lastName: { type: Sequelize.STRING, allowNull: false },
		number: { type: Sequelize.STRING, allowNull: false },
		age: { type: Sequelize.STRING, allowNull: false },
		experience: { type: Sequelize.STRING, allowNull: false },
		referenceName: { type: Sequelize.STRING, allowNull: false },
		referenceNumber: { type: Sequelize.STRING, allowNull: false },
		link: { type: Sequelize.STRING },
		userid: { type: Sequelize.STRING },
		gigid: { type: Sequelize.STRING },
		gigDate: { type: Sequelize.STRING }
	});

	return Request;
};
