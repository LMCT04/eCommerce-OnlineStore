const { DataTypes } = require("sequelize");

// Exportamos una funcion donde definimos el modelo y le pasamos
// la conexion con sequelize

module.exports = (sequelize) => {
    sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            image: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    isUrl: {
                        args: true,
                        msg: "Image must be a valid URL",
                    },
                },
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            userName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    len: {
                        arg: [3],
                        msg: "The field must be at least 3 characters",
                    },
                },
            },
            mail: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        args: true,
                        msg: "The email is incorrect",
                    },
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        args: [8, 16],
                    },
                },
            },
            role: {
                type: DataTypes.ENUM("admin", "user", "superAdmin"),
                defaultValue: "user",
                field: "role",
            },
        },
        { timestamps: false }
    );
};
