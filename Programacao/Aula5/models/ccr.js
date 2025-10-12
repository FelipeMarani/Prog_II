"use strict";

const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const CCR = sequelize.define(
        "ccr",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey : true,
            },
            id_curso: {
                type: DataTypes.INTEGER,
                
            },
            descricao: DataTypes.STRING,
            ementa: DataTypes.STRING,
        }
    )
}