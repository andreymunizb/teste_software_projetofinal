const express = require('express')
const router = express.Router()

const cursoController = require('../controllers/cursoController')

router.get('/cursos', cursoController.listarCursos)
router.post('/cursos', cursoController.criarCurso)
router.put('/cursos/:id', cursoController.editarCurso)
router.delete('/cursos/:id', cursoController.deletarCurso)

module.exports = router