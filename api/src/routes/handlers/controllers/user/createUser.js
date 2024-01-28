// Importamos el modelo User desde la base de datos
const { User } = require('../../../../db.js');

// Definimos la función asíncrona createUser, que toma los parámetros del modelo User
const createUser = async (name, lastname, image, userName, mail, password, role) => {
    // Verificamos que el valor del rol sea uno de los permitidos: admin, user, superAdmin
    if (['admin', 'user', 'superAdmin'].includes(role)) {
        throw new Error('The value of "role" must be admin, user, superAdmin');
    }

    // Utilizamos destructuring para buscar o crear en el modelo User
    // newUser contendrá la instancia del usuario creado o encontrado
    // created indicará si el usuario ya existía (true o false) según encuentre coincidencia en el correo electrónico
    let [newUser, created] = await User.findOrCreate({
        where: {
            mail: mail,
            userName: userName
        }, 
        defaults: {
            name, lastname, image, userName, mail, password, role
        }
    });

    // Si created=false significa que el usuario ya existía y lanzamos un error
    if (!created) {
        throw new Error('The user already exists');
    }

    // Si created=true, no se encontró coincidencia en la base de datos y se crea el usuario
    return newUser;
};

//Exportamos la función
module.exports = {
    createUser
}