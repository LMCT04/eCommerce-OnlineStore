const { SubCategory } = require("../../../../db.js");

const subcategoryById = async (id) => {
    if (isNaN(id)) {
        throw new Error(`Error, ${id} is not a valid ID`);
    }
    try {
        const subcategory = await SubCategory.findByPk(id);
        if (!subcategory) {
            throw new Error(
                `Error, subcategory with ID ${id} does not exist in the database`
            );
        }
        return subcategory;
    } catch (error) {
        throw new Error("Error, getting subcategory by ID");
    }
};

module.exports = {
    subcategoryById,
};
