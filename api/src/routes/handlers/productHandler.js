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
const { allProducts, createProducts } = require("./controllers/product");
// Declaramos las funciones para las distintos pedidos HTTP en las cuales usaremos los controladores correspondientes

const G_allP = async (req, res) => {
    try {
        console.log('HANDLER PRODUCT')
        const response = await allProducts();
        res.status(200).send(response);
    } catch (error) {
        res.status(400).json("Error GET all products");
    }
};

const G_idP = async (req, res) => {
    try {
        res.status(200).json("GET products by id");
    } catch (error) {
        res.status(400).json("Error GET products by id");
    }
};

const P_updateP = async (req, res) => {
    try {
        res.status(200).json("PUT update products");
    } catch (error) {
        res.status(400).json("Error PUT update products");
    }
};

const PST_createP = async (req, res) => {
    const { name, description, price, image, category, subcategory } = req.body;
    const newProduct = {
        name,
        description,
        price,
        image,
        category,
        subcategory,
    };
    try {
        await createProducts(newProduct);
        res.status(200).send({ message: "Product created successfully" });
    } catch (error) {
        res.status(400).json("Error POST create products");
    }
};

// Exportamos las funciones para usarlas en las rutas de cada modelo
module.exports = {
    G_allP,
    G_idP,
    P_updateP,
    PST_createP,
};
