// Importamos el modelo User desde la base de datos
const { User } = require("../../../../db.js");

const updateRole = async (mail, newRole) => {
    try {
        const user = await User.findOne({ where: { mail } });

        if (!user) {
            throw new Error("User not found");
        }

        if (
            newRole !== "admin" &&
            newRole !== "user" &&
            newRole !== "superAdmin"
        ) {
            throw new Error("Invalid role");
        }

        user.role = newRole;
        await user.save();
        return user;
    } catch (error) {
        throw new Error("Error updating role");
    }
};

module.exports = {
    updateRole
};