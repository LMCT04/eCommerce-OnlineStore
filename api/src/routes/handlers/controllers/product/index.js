const { allProducts } = require('./allProducts')
const { createProducts } = require('./createProducts')
const { updateStatus } = require('./updateStatus')
const { updateName } = require('./updateName')
const { updatePrice } = require('./updatePrice')
const { updateDescription } = require('./updateDescription')
const { productById } =require('./productById')


module.exports = {
    allProducts,
    createProducts,
    updateStatus,
    updateName,
    updatePrice,
    updateDescription,
    productById
};