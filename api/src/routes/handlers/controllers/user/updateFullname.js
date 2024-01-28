// Importamos el modelo User desde la base de datos
const { User } = require("../../../../db.js");

const updateFullname = async (mail, newName, newLastname) => {
    try {
        const user = await User.findOne({ where: { mail } });

        if (!user) {
            throw new Error("User not found");
        }

        user.name = newName;
        user.lastname = newLastname;
        await user.save();

        return user;
    } catch (error) {
        throw new Error("Error updating fullname");
    }
};

module.exports = {
    updateFullname
};