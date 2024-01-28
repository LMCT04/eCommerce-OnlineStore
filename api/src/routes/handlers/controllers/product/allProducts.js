// Importamos el modelo Product desde la base de datos
const { Product } = require('../../../../db.js');

const allProducts = async () => {
    try {
        const response = await Product.findAll();
        
        console.log('ALL PRODUCTS', response);
        return response;
    } catch (error) {
        throw new Error(`Error getting products: ${error}`);
    }
}

module.exports = {
    allProducts
};