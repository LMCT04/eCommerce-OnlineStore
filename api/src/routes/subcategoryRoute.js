// Traemos el Router de express y lo declaramos en una variable
const { Router } = require('express')
const subcategoryRoute = Router()

// Traemos los handlers que manejan las request y el response
const { G_allSC, G_idSC, PST_createSC } = require('./handlers/subcategoryHandler.js')

// Establecemos los diferentes pedidos y sus respuestas a la Ruta
subcategoryRoute.get('/', G_allSC)
subcategoryRoute.get('/:id', G_idSC)
subcategoryRoute.post('/', PST_createSC)

// Exportamos la variable donde se encuentra la ruta
module.exports = subcategoryRoute