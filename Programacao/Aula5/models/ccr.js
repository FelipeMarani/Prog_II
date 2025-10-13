"use strict";

module.exports = (sequelize, DataTypes) => {
    const CCR = sequelize.define(
        "CCR",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            id_curso: {
                type: DataTypes.INTEGER,
            },
            descricao: DataTypes.STRING,
            ementa: DataTypes.STRING,
        },
        {
            sequelize,
            tableName: "ccr",
            schema: "public",
            freezeTableName: true,
            timestamps: false,
        },
    );
    CCR.associate = function (models) {
        CCR.hasMany(models.ProfessorCcr, {
            foreignKey: "id_ccr",
            sourceKey: "id",
        });

        CCR.belongsTo(models.Curso, {
            foreignKey: "id_curso",
            sourceKey: "id",
        });
    };

    return CCR;
};
