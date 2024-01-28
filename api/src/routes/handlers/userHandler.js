/*
! Manejo de variables con metodos HTTP
* G -> get, P -> put, PST -> post, D -> delete

! Manejo de variable con la INICIAL del modelo posterior a '_' y explicacion de q maneja el hanlder
*  '_' + product model -> P(...roduct) + accion del handler

! EJEMPLO
* get all products -> G_allP
* get products by id -> G_idP
*/

//----------------------------------------------------------------------------------->
// Declaramos las funciones para las distintos pedidos HTTP en las cuales usaremos los controladores correspondientes

const {
    updateFullname,
    updatePassword,
    updateRole,
    updateUsername,
    createUser,
    allUsers,
    userByMail,
} = require("./controllers/user");

const G_allU = async (req, res) => {
    try {
        const response = await allUsers();
        res.status(200).send(response);
    } catch (error) {
        res.status(400).json("Error GET all users");
    }
};

const G_idU = async (req, res) => {
    try {
        res.status(200).json("GET user by id");
    } catch (error) {
        res.status(400).json("Error GET user by id");
    }
};

const P_updateU = async (req, res) => {
    const { mail, lastname, name, userName, role, password } = req.body;
    try {
        const user = await userByMail(mail);

        if (!user) {
            throw new Error("User not found");
        }

        if (password) {
            const updatedUser = await updatePassword(mail, password);
            return res.json(updatedUser);
        }

        if (lastname && name) {
            const updatedUser = await updateFullname(mail, name, lastname);
            return res.json(updatedUser);
        }

        if (userName) {
            const updatedUser = await updateUsername(mail, userName);
            return res.json(updatedUser);
        }

        if (role) {
            const updatedUser = await updateRole(mail, role);
            return res.json(updatedUser);
        }
        return res.json(user);
    } catch (error) {
        res.status(400).json("Error PUT update user");
    }
};

const PST_createU = async (req, res) => {
    const { name, lastname, image, userName, mail, password, role } = req.body;
    try {
        await createUser(name, lastname, image, userName, mail, password, role);
        res.status(200).send({ message: "User created successfully" });
    } catch (error) {
        res.status(400).json("Error POST create user");
    }
};

// Exportamos las funciones para usarlas en las rutas de cada modelo

module.exports = {
    G_allU,
    G_idU,
    P_updateU,
    PST_createU,
};
