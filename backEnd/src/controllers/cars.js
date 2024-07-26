const connection = require("../db/connection");


async function getAllCars(req, res) {
    const [result] = await connection.execute(
        'SELECT * FROM cars');    

    res.json(result)
};

module.exports = {
    getAllCars
};