// Importamos el modelo SubCategory desde la base de datos
const { SubCategory } = require("../../../../db.js");

const createSubCategory = async (name, CategoryId) => {
    console.log("Name:", name);
    console.log("CategoryId:", CategoryId);

    let [newSubCategory, created] = await SubCategory.findOrCreate({
        where: {
            name: name,
        },
        defaults: {
            name,
            CategoryId,
        },
        mapToModel: false,
    });

    if (!created) {
        throw new Error("The subcategory already exists");
    }

    return newSubCategory;
};

module.exports = {
    createSubCategory,
};
