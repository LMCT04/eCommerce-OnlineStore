// Importamos el modelo User desde la base de datos
const { User } = require('../../../../db.js');

const allUsers = async () => {
    try {
        const response = await User.findAll();
        return response;
    } catch (error) {
        throw new Error(`Error getting users: ${error}`);
    }
}

module.exports = {
    allUsers
}