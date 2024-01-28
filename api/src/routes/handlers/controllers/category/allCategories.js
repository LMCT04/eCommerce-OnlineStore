// Importamos el modelo Category desde la base de datos
const e = require('express');
const { Category } = require('../../../../db.js');

const allCategories = async () => {
    try {
        const response = await Category.findAll();
        return response;
    } catch (error) {
        throw new  Error(`Error getting categories: ${error}`);
    }
}

module.exports = {
    allCategories
};
