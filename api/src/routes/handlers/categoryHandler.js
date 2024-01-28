/*
! Manejo de variables con metodos HTTP
* G -> get, P -> put, PST -> post, D -> delete

! Manejo de variable con la INICIAL del modelo posterior a '_' y explicacion de q maneja el hanlder
*  '_' + product model -> P(...roduct) + accion del handler

! EJEMPLO
* get all products -> G_allP
* get products by id -> G_idP
*/

//----------------------------------------------------------------------------------->
// Importamos los controller necesarios para los pedidos HTTP
const { allCategories, createCategory } = require('./controllers/category')

// Declaramos las funciones para las distintos pedidos HTTP en las cuales usaremos los controladores correspondientes
const G_allC = async (req, res) => {
    try {
        const response = await allCategories();
        res.status(200).send(response);
    } catch (error) {
        res.status(400).json("Error GET all categories");
    }
};

const G_idC = async (req, res) => {
    try {
        res.status(200).json("GET category by id");
    } catch (error) {
        res.status(400).json("Error GET category by id");
    }
};

const PST_createC = async (req, res) => {
    const { name } = req.body
    try {
        await createCategory(name);
        res.status(200).send({ message: "Category created successfully"});
    } catch (error) {
        res.status(400).json("Error POST create category");
    }
};

// Exportamos las funciones para usarlas en las rutas de cada modelo
module.exports = {
    G_allC,
    G_idC,
    PST_createC,
};
