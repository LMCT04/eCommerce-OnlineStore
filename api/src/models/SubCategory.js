const { DataTypes } = require("sequelize");

// Exportamos una funcion donde definimos el modelo y le pasamos
// la conexion con sequelize

module.exports = (sequelize) => {
    const SubCategory = sequelize.define(
        "SubCategory",
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

    SubCategory.associate = (models) => {
        SubCategory.belongsTo(models.Category, {
            foreignKey: "categoryId",
        });
    };

    return SubCategory;
};
