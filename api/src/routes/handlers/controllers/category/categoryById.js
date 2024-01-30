const { Category } = require("../../../../db.js");

const categoryById = async (id) => {
    if (isNaN(id)) {
        throw new Error(`Error, ${id} is not a valid ID`);
    }
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            throw new Error(
                `Error, category with ID ${id} does not exist in the database`
            );
        }
        return category;
    } catch (error) {
        throw new Error("Error, getting category by ID");
    }
};

module.exports = {
    categoryById,
};
