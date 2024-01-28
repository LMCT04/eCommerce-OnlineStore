// Importamos el modelo User desde la base de datos
const { User } = require("../../../../db.js");

const updatePassword = async (mail, newPassword) => {
    try {
        const user = await User.findOne({ where: { mail } });

        if (!user) {
            throw new Error("User not found");
        }

        user.password = newPassword;

        await user.save();

        return user;
    } catch (error) {
        console.error(error);
        throw new Error("Error updating password");
    }
};

module.exports = {
    updatePassword
};