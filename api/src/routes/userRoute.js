// Traemos el Router de express y lo declaramos en una variable
const { Router } = require("express");
const userRoute = Router();

// Traemos los handlers que manejan las request y el response
const { G_allU, G_idU, P_updateU, PST_createU } = require('./handlers/userHandler.js')

// Establecemos los diferentes pedidos y sus respuestas a la Ruta
userRoute.get('/', G_allU)
userRoute.get('/:id', G_idU)
userRoute.put('/', P_updateU)
userRoute.post('/', PST_createU)

// Exportamos la variable donde se encuentra la ruta
module.exports = userRoute;