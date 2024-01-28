// Importamos el modelo Product desde la base de datos
const { Product, Category, SubCategory } = require('../../../../db.js');

const createProducts = async (newProduct) => {
        // Manejamos que se completen los campos necesarios
        if(!newProduct .name || !newProduct.image || !newProduct.description || !newProduct.price || !newProduct.category){
            throw new Error('Error, Enter ALL the necessary data (name, image, description, price, category)');
        }

        // Manejamos las condiciones únicas de cada campo
        // Si nombre no es un string, error
        if (typeof newProduct.name !== 'string') {
            throw new Error('Error, name must be a string');
        }

        // Si la descripción no es un string, error
        if (typeof newProduct.description !== 'string') {
            throw new Error('Error, description must be a string');
        }

        // Si el precio no es un numero o es menor que cero, error
        if (isNaN(Number(newProduct.price)) || newProduct.price < 0) {
            throw new Error('Error, price must be a number greater than 0');
        }

        // Si la categoría no existe o no es un string, error
        if (!newProduct.category || typeof newProduct.category !== 'string'){
            throw new Error('Error, You must enter a category or a category and a subcategory');
        }

        // Si la categoría no existe en la base de datos
        if (newProduct.category) {
            const existingCategory = await Category.findOne({ where: { name: newProduct.category } });
            if (!existingCategory) {
                throw new Error('Error, Category not exist');
            }
        }

        // Creamos una variable
        let productCategoryId;
        // Si existe categoría y sub categoría filtramos según... 
        if (newProduct.category && newProduct.subcategory && typeof newProduct.subcategory === 'string') {
            // Buscamos la categoría en la base de datos según el nombre
            const existingCategory2 = await Category.findOne({
                where: { name: newProduct.category }
            })
            // Guardamos el id de la categoría en la variable previamente creada
            productCategoryId = existingCategory2.id
            //Comparamos el id de la categoría ingresada con la foreign Id de la sub categoría ingresada
            const existingSubcategory = await SubCategory.findOne({
                where: { name: newProduct.subcategory, CategoryId: productCategoryId }
            })

            if(!existingSubcategory) {
                throw new Error('Error, The subcategory is not associated with the category entered');
            }
        }

        // Verificamos si el producto ya existe
        let [newProduct2, created] = await Product.findOrCreate({
            where: {
                name: newProduct.name,
            }, 
            defaults: {
                name: newProduct.name,
                image: newProduct.image,
                description: newProduct.description,
                price: newProduct.price,
                category: newProduct.category,
            }
        });

        if (!created) {
            throw new Error('The Product already exists');
        }

        if (newProduct.subcategory){
            await newProduct2.setSubcategory(newProduct.subcategory);
        }
        console.log(newProduct2);
        return newProduct2;
}

module.exports = {
    createProducts
};