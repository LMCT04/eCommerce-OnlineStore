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
const {
    allCategories,
    createCategory,
    categoryById,
    categoryByName,
} = require("./controllers/category");

// Declaramos las funciones para las distintos pedidos HTTP en las cuales usaremos los controladores correspondientes
const G_allC = async (req, res) => {
    const { name } = req.query;

    try {
        const response = name
            ? await categoryByName(name)
            : await allCategories();
        res.status(200).send(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const G_idC = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await categoryById(id);
        res.status(200).send(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const PST_createC = async (req, res) => {
    const { name } = req.body;
    try {
        await createCategory(name);
        res.status(200).send({ message: "Category created successfully" });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Exportamos las funciones para usarlas en las rutas de cada modelo
module.exports = {
    G_allC,
    G_idC,
    PST_createC,
};
