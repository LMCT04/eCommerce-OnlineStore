const { Product } = require('../../../../db.js')


const  updateDescription = async (id, description) => {
    if (typeof description !== 'string') {
        throw new Error('Error, you must enter a string');
    }

    try {
        const product = await Product.findByPk(id)

        if (!product) {
            throw new Error('Error, product not found');
        }

        product.description = description;
        await product.save();

        return product
        
    } catch (error) {
        throw new Error('Error, could not update description');
    }
}

module.exports = {
    updateDescription
};
