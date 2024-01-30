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
const {
    allProducts,
    createProducts,
    updateDescription,
    updateName,
    updatePrice,
    updateStatus,
    productById
} = require("./controllers/product");
// Declaramos las funciones para las distintos pedidos HTTP en las cuales usaremos los controladores correspondientes

const G_allP = async (req, res) => {
    try {
        const response = await allProducts();
        res.status(200).send(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const G_idP = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await productById(id);
        res.status(200).send(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const P_updateP = async (req, res) => {
    const { status, name, price, description, id } = req.body
    console.log("handler", status, id);
    try {
        const product = await productById(id)

        if (!product) {
            throw new Error('Error, Product not found');
        }
        if (typeof status !== 'undefined') {
            console.log("pasamos por aca");
            await updateStatus(id, status);
        }
        if (name) {
            await updateName(id, name);
        }
        if (price) {
            await updatePrice(id, price);
        }
        if (description) {
            await updateDescription(id, description);
        }

        const updateProduct = await productById(id);
        return res.json(updateProduct);
    } catch (error) {
        res.status(404).json({ error: error.message });
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
        res.status(404).json({ error: error.message });
    }
};

// Exportamos las funciones para usarlas en las rutas de cada modelo
module.exports = {
    G_allP,
    G_idP,
    P_updateP,
    PST_createP,
};
