const express = require('express')
const router = express.Router()

const cursoController = require('../controllers/cursoController')

router.get('/cursos', cursoController.listarCursos)
router.post('/cursos', cursoController.criarCurso)

module.exports = router