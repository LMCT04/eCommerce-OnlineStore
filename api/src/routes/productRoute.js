// Traemos el Router de express y lo declaramos en una variable
const { Router } = require('express')
const productRoute = Router()

// Traemos los handlers que manejan las request y el response
const { G_allP, G_idP, P_updateP, PST_createP } = require('./handlers/productHandler.js')

// Establecemos los diferentes pedidos y sus respuestas a la Ruta
productRoute.get('/', G_allP)
productRoute.get('/:id', G_idP)
productRoute.put('/', P_updateP)
productRoute.post('/', PST_createP)

// Exportamos la variable donde se encuentra la ruta
module.exports = productRoute