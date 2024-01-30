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
    allSubCategories,
    createSubCategory,
    subcategoryById,
    subcategoryByName,
    subcategoriesByCategory
} = require("./controllers/subcategory");

// Declaramos las funciones para las distintos pedidos HTTP en las cuales usaremos los controladores correspondientes
const G_allSC = async (req, res) => {
    const { name } = req.query;
    const { CategoryId } = req.body

    try {
        let response

        if(name) {
            response = await subcategoryByName(name);
        } else if (CategoryId) {
            response = await subcategoriesByCategory(CategoryId);
        } else {
            response = await allSubCategories();
        }
        res.status(200).send(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const G_idSC = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await subcategoryById(id);

        res.status(200).send(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const PST_createSC = async (req, res) => {
    const { name, CategoryId } = req.body;
    try {
        await createSubCategory(name, CategoryId);
        res.status(200).send({ message: "SubCategory created successfully" });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Exportamos las funciones para usarlas en las rutas de cada modelo

module.exports = {
    G_allSC,
    G_idSC,
    PST_createSC,
};
