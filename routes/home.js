const express = require('express')
const { leerURLs, crearURL, eliminarURL, FormEditarURL, editarURL, redireccionamiento } = require('../controllers/homeController')
const validarUrl = require('../middlewares/validUrl')
const router = express.Router()

router.get('/', leerURLs)
router.post('/', validarUrl, crearURL)
router.get('/eliminar/:id', eliminarURL)
router.get('/editar/:id', FormEditarURL)
router.post('/editar/:id', validarUrl, editarURL)
router.get('/:shortURL', redireccionamiento)

module.exports = router
