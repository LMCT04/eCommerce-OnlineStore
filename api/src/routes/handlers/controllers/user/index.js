const { updateFullname } = require('./updateFullname')
const { updatePassword } = require('./updatePassword')
const { updateRole } = require('./updateRole')
const { updateUsername } = require('./updateUsername')
const { createUser } = require('./createUser')
const { allUsers } = require('./allUsers')
const { userByMail } = require('./userByMail')
const { userByFullName } = require('./userByFullname')

module.exports = {
    updateFullname,
    updatePassword,
    updateRole,
    updateUsername,
    createUser,
    allUsers,
    userByMail,
    userByFullName
};

