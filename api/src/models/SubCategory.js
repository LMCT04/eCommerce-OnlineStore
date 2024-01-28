const { DataTypes } = require("sequelize");

// Exportamos una función donde definimos el modelo y le pasamos
// la conexión con sequelize

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

    SubCategory.associate = (models) => {
        SubCategory.belongsTo(models.Category, {
            foreignKey: "categoryId",
        });
    };

    return SubCategory;
};
