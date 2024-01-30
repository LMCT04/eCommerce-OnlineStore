const { Product } = require('../../../../db.js');

const  updateStatus = async (id, status) => {
    if (typeof status !== 'boolean') {
        throw new Error('Error, status must be a boolean');
    }
    console.log("id:", id, "status:" , status);
    try {
        const product = await Product.findByPk(id);
        console.log(product);
        product.isActive = status;
        await product.save();
        console.log(product.isActive);
        return product;
    } catch (error) {
        throw new Error('Error, could not update status');
    }
}

module.exports = {
    updateStatus
};
