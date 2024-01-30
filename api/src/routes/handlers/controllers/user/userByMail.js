const { User } = require("../../../../db.js");

const userByMail = async (mail) => {
    try {
        const user = await User.findAll({ where: { mail } });

        if (user.length === 0) {
            throw new Error("User not found");
        }
        return {
            id: user[0].id,
            image: user[0].image,
            name: user[0].name,
            lastname: user[0].lastname,
            userName: user[0].userName,
            mail: user[0].mail,
            role: user[0].role,
        }
    } catch (error) {
        throw new Error('Error getting user by mail')
    }
}

module.exports = {
    userByMail
};
