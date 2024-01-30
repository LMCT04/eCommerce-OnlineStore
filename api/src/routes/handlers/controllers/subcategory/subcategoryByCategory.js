const { SubCategory, Category } = require('../../../../db.js')

const  subcategoriesByCategory = async (category) => {
    try {
        let CategoryId

        if (typeof category === 'number') {
            console.log(category);
            CategoryId = category
            console.log(CategoryId);
        } else if (typeof category === 'string') {
            const categoryDB = await Category.findOne({
                where : {
                    name : category
                }
            })

            if (!categoryDB) {
                throw new Error('Error, Category not exist');
            }

            CategoryId = categoryDB.id
        } else {
            throw new Error('Error, Invalid categoryId');
        }

        const subcategories = await SubCategory.findAll({
            where : {
                CategoryId:  CategoryId
            }
        })

        return subcategories
    } catch (error) {
        throw new Error('Error, getting subcategories by category');
    }
}

module.exports = {
    subcategoriesByCategory
};
