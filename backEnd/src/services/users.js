const { selectUser, create } = require("../models/users");

async function getLogin(user) {
    const result = selectUser(user);
    return result;
};

const createServices = async (user) => {
    const result = await create(user);
    return result;
};

module.exports = {
    getLogin,
    createServices
};