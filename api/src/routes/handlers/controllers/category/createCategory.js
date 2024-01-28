// Importamos el modelo Category desde la base de datos
const { Category } = require('../../../../db.js');

const createCategory = async (name) => {
        // Verificamos si la categoría a crear ya existe
        let [newCategory, created] = await Category.findOrCreate({
            where: {
                name: name
            }, 
            defaults: {
                name
            }
        });

        if (!created) {
            throw new Error('The category already exists');
        }

        return newCategory;
}

module.exports = {
    createCategory
};