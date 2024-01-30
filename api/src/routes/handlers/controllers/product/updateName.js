const { Product } = require('../../../../db.js')


const  updateName = async (id, name) => {
    if (typeof name !== 'string') {
        throw new Error('Error, you must enter a string');
    }
    try {
        const product = await Product.findByPk(id)

        if (!product) {
            throw new Error('Error, product not found');
        }

        product.name = name;
        await product.save();

        return product;
        
    } catch (error) {
        throw new Error('Error, could not update name');
    }
}

module.exports = {
    updateName
};
