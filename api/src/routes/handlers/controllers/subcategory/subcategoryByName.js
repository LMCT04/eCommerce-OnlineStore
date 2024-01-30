const { SubCategory } = require("../../../../db.js");

const subcategoryByName = async (name) => {
    if (typeof name !== "string") {
        throw new Error("Error, you must enter a string");
    }
    try {
        const subcategory = await SubCategory.findOne({
            where: {
                name: name,
            },
        });

        if (!subcategory) {
            throw new Error("Error, subcategory not exist");
        }

        return subcategory;
    } catch (error) {
        throw new Error("Error, getting subcategory by Name");
    }
};

module.exports = {
    subcategoryByName,
};
