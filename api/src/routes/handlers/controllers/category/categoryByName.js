const { Category } = require("../../../../db.js");

const categoryByName = async (name) => {
    if (typeof name !== "string") {
        throw new Error("Error, you must enter a string");
    }
    try {
        const category = await Category.findOne({
            where: {
                name: name,
            },
        });

        if (!category) {
            throw new Error("Error, category not exist");
        }

        return category;
    } catch (error) {
        throw new Error("Error, getting category by Name");
    }
};

module.exports = {
    categoryByName,
};
