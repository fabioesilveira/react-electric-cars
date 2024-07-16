const { getLogin, createServices } = require("../services/users");

async function postLogin(req, res) {
    const user = req.body;

    const result = await getLogin(user);

    if (result) {
        return res.status(200).json(result);
    }
    return res.status(500).json({ "message": "Email ou password inválidos!" });
};

const createUser = async (req, res) => {
    const user = req.body;
    try {
        const insertId = await createServices(user);
        res.status(201).json({ message: 'Create', id: insertId });
    } catch (err) {
        console.error('Erro ao criar o usuário:', err.message);
        res.status(500).json({ message: 'Not Create' });
    }
};



async function getAllUsers(req, res) {
    console.log('...')
    res.json({})
};

module.exports = {
    postLogin,
    createUser,
    getAllUsers
};