const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost', // Seu host do MySQL
    user: 'root', // Seu usuário do MySQL
    password: '1234', // Sua senha do MySQL
    database: 'db_cars', // Nome do banco de dados criado anteriormente
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection;