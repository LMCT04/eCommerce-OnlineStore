const { allSubCategories } = require('./allSubCategories')
const { createSubCategory } = require('./createSubCategory')
const { subcategoryById } = require('./subcategoryById')
const { subcategoryByName } = require('./subcategoryByName')
const { subcategoriesByCategory } = require('./subcategoryByCategory')

module.exports = {
    allSubCategories,
    createSubCategory,
    subcategoryById,
    subcategoryByName,
    subcategoriesByCategory
}