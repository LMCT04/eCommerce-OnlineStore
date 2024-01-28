// Importamos el modelo SubCategory desde la base de datos
const { SubCategory } = require("../../../../db.js");

const allSubCategories = async () => {
    try {
        const response = await SubCategory.findAll();
        console.log(response);
        return response;
    } catch (error) {
        throw new Error(`Error getting subcategories: ${error}`)
    }
};

module.exports = {
    allSubCategories,
};
