"use strict";

module.exports = (sequelize, DataTypes) => {
    const ProfessorCcr = sequelize.define(
        "ProfessorCcr",
        {
            id_professor: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            id_ccr: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
        },
        {
            sequelize,
            TableName: "professor_ccr",
            schema: "public",
            freeseTableName: true,
            timestamps: false,
        },
    );

    ProfessorCcr.associate = function (models) {
        ProfessorCcr.belongsTo(models.Professor, {
            foreinKey: "id_professor",
            sourceKey: "id",
        });
        ProfessorCcr.belongsTo(models.Ccr, {
            foreinKey: "id_ccr",
            sourceKey: "id",
        });
    };

    return ProfessorCcr;
}
