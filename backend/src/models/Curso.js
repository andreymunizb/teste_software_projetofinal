const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Curso = sequelize.define('Curso', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    imagem: {
        type: DataTypes.STRING
    }
})

module.exports = Curso