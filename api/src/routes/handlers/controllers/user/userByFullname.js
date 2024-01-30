const { User } = require('../../../../db.js');

const  userByFullName = async (name, lastname) => {
    // Verificamos si el valor es un string
    if ((name && typeof name !== 'string') || (lastname && typeof lastname !== 'string')) {
        throw new Error(`Error, you must enter a string`);
    }

    try {
        const whereClause = {};

        if (name) {
            whereClause.name = name;
        }

        if (lastname) {
            whereClause.lastname = lastname;
        }

        console.log(whereClause);

        const user = await User.findOne({
            where: whereClause
        });
        console.log(user);
        if (user === null) {
            throw new Error('Error, User not exist');
        }
        
        return {
            id: user.id,
            image: user.image,
            name: user.name,
            lastname: user.lastname,
            userName: user.userName,
            mail: user.mail,
            role: user.role,
        }
        
    } catch (error) {
        throw new Error('Error, getting user by full name');
    }
}

module.exports = {
    userByFullName
};
