"use strict";

module.exports = (sequelize, DataTypes) => {
	const professor = sequelize.define(
		"professor",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			nome: DataTypes.STRING,
			email: DataTypes.STRING,
		},
		{
			sequelize,
			tableName: "professor",
			schema: "public",
			freezeTableName: true,
			timestamps: false,
		},
	);

	// professor.associate = function (models) {
	// 	professor.hasMany(models.professor_ccr, {
	// 		foreignKey: "id_professor",
	// 		sourceKey: "id",
	// 	});
	// };

	return professor;
};
