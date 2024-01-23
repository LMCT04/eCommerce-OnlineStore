const { DataTypes } = require("sequelize");

// Exportamos una funcion donde definimos el modelo y le pasamos
// la conexion con sequelize

module.exports = (sequelize) => {
    const Category = sequelize.define(
        "Category",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        { timestamps: false }
    );

    //prueba

    Category.associate = (models) => {
        Category.hasMany(models.SubCategory, {
            foreignKey: {
                name: "categoryId",
                allowNull: false,
            },
        });
        Category.hasMany(models.Product, {
            foreignKey: {
                name: "categoryId",
                allowNull: false,
            },
        });
    };

    return Category;
};
