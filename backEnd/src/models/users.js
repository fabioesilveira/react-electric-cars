const connection = require("../db/connection");

async function selectUser(user) {
    const { email, password } = user;
    try {
        const [[result]] = await connection.execute(
            'SELECT * FROM users WHERE email = ? AND password = ?', [email, password]
        );

        if (!result) {
            return false;
        }

        return result
    } catch (error) {
        console.error(error);
        return error
    }
};

const create = async (user) => {
    const { name, email, password } = user;
    const [{ result }] = await connection.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, password]
    );
    return result;
};

module.exports = {
    selectUser,
    create
};