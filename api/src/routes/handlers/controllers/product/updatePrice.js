const { Product } = require('../../../../db.js')

const  updatePrice = async (id, price) => {
    if (isNaN(price)) {
        throw new Error('Error, You must enter a number');
    }
    try {
        const product = await Product.findByPk(id)

        if (!product) {
            throw new Error('Error, Product not found');
        }

        product.price = price
        await product.save()

        return product
        
    } catch (error) {
        throw new Error('Error, could not update price');
    }
}

module.exports = {
    updatePrice
};
