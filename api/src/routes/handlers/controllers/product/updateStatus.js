const { Product } = require('../../../../db.js');

const  updateStatus = async (id, status) => {
    if (typeof status !== 'boolean') {
        throw new Error('Error, status must be a boolean');
    }
    try {
        const product = await Product.findByPk(id);
        product.isActive = status;
        await product.save();
        return product;
    } catch (error) {
        throw new Error('Error, could not update status');
    }
}

module.exports = {
    updateStatus
};
