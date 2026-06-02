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
  detalhes: {
    type: DataTypes.TEXT
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  imagem: {
    type: DataTypes.STRING
  },
  banner: {
    type: DataTypes.STRING
  },
  video: {
    type: DataTypes.STRING
  }
})

module.exports = Curso