const { Product } = require("../../../../db.js");


const  productById = async (id) => {
    if (isNaN(id)) {
        throw new Error(`Error, ${id} is not a valid ID`);
    }

    try {
        const product = await Product.findByPk(id);

        if (!product) {
            throw new Error(`Error, product with ID: ${id} does not exist in the database`);
        }

        return product;
    } catch (error) {
        throw new Error('Error, getting product by ID');
    }
}

module.exports = {
    productById
};
