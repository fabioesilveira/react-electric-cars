const connection = require("../db/connection");

async function getAll(req, res) {
    const [result] = await connection.execute(
        'SELECT * FROM favorite_cars');

    res.status(200).json(result)
};

async function getById(req, res) {
    const { id } = req.params;

    const [result] = await connection.execute(
        'SELECT * FROM favorite_cars WHERE id = ?', [id]);

    res.status(200).json(result)
};

async function create(req, res) {
    const { userId, carId } = req.body;

    if (!userId || !carId) {
        return res.status(400).send('userId e carId são necessários.');
    };

    const [result] = await connection.execute(
        'INSERT INTO favorite_cars (user_id, car_id) VALUES (?, ?)', [userId, carId]);

    res.status(200).json(result)
};

async function getFavoritesByUserId(req, res) {
    const { userId } = req.params;
    console.log(userId)
    const query = `
        SELECT 
            users.name AS user_name, 
            cars.car_name, 
            cars.model, 
            cars.price, 
            cars.range, 
            cars.image_1, 
            cars.image_2, 
            cars.image_3, 
            cars.image_4 
        FROM 
            favorite_cars
        INNER JOIN 
            users ON favorite_cars.user_id = users.id
        INNER JOIN 
            cars ON favorite_cars.car_id = cars.id
        WHERE 
            favorite_cars.user_id = ?`;

    try {
        const [results] = await connection.execute(query, [userId]);

        if (results.length === 0) {
            return res.status(404).json({ message: 'No favorites found for this user' });
        }

        res.status(200).json(results);
    } catch (error) {
        console.error('Error fetching favorites for user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getAll,
    getById,
    create,
    getFavoritesByUserId
};