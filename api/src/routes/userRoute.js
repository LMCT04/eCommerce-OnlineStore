const { Router } = require("express");
const userRoute = Router();

userRoute.get('/', (req, res) => {
    res.json('HOLA MUNDO')
})

module.exports = userRoute;