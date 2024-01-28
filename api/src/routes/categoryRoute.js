// Traemos el Router de express y lo declaramos en una variable
const { Router } = require('express')
const categoryRoute = Router()

// Traemos los handlers que manejan las request y el response
const { G_allC, G_idC, PST_createC } = require('./handlers/categoryHandler.js')

// Establecemos los diferentes pedidos y sus respuestas a la Ruta
categoryRoute.get('/', G_allC)
categoryRoute.get('/:id', G_idC)
categoryRoute.post('/', PST_createC)

// Exportamos la variable donde se encuentra la ruta
module.exports = categoryRoute