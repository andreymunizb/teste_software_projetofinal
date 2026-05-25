const Curso = require('../models/Curso')

exports.listarCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll()
    res.status(200).json(cursos)
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar cursos' })
  }
}

exports.criarCurso = async (req, res) => {
  try {
    const curso = await Curso.create(req.body)
    res.status(201).json(curso)
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar curso' })
  }
}