// Importamos el modelo User desde la base de datos
const { User } = require("../../../../db.js");

const updateUsername = async (mail, newUsername) => {
    try {
        const user = await User.findOne({ where: { mail } });

        if (!user) {
            throw new Error("User not found");
        }

        user.userName = newUsername;
        await user.save();

        return user;
    } catch (error) {
        throw new Error("Error updating username");
    }
};

module.exports = {
    updateUsername
};