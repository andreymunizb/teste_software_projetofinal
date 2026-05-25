const Curso = require('../models/Curso')

exports.listarCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll()
    res.json(cursos)
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar cursos' })
  }
}

exports.criarCurso = async (req, res) => {
  try {
    const curso = await Curso.create(req.body)
    res.status(201).json(curso)
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar curso' })
  }
}

exports.editarCurso = async (req, res) => {
  try {
    const { id } = req.params
    await Curso.update(req.body, { where: { id } })
    res.json({ mensagem: 'Curso atualizado' })
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar curso' })
  }
}

exports.deletarCurso = async (req, res) => {
  try {
    const { id } = req.params
    await Curso.destroy({ where: { id } })
    res.json({ mensagem: 'Curso deletado' })
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar curso' })
  }
}