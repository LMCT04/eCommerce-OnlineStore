const { DataTypes } = require('sequelize')


// Exportamos una funcion donde definimos el modelo y le pasamos
// la conexion con sequelize

module.exports = (sequelize) => {
    sequelize.define(
        'Product', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            image: {
                type: DataTypes.ARRAY(DataTypes.TEXT),
                allowNull: false,
                validate: {
                    isUrl: {
                        args: true,
                        msg: 'Image must be a valid URL',
                    }
                },
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            price: {
                type: DataTypes.FLOAT,
                allowNull: true,
                validate: {
                    min: 0,
                }
            },

            isActive: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            }

        }, { timestamps: false }
    )
}