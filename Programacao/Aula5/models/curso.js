"use strict";

module.exports = (sequelize, DataTypes) => {
	const Curso = sequelize.define(
		"Curso",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			descricao: DataTypes.TEXT,
		},
		{
			sequelize,
			tableName: "curso",
			schema: "public",
			freezeTableName: true,
			timestamps: false,
		},
	);

	Curso.associate = function (models) {
		Curso.hasMany(models.Matricula, {
			foreignKey: "id_curso",
			sourceKey: "id",
		});
	};

	return Curso;
};
