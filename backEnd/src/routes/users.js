const express = require('express');
const { postLogin, getAllUsers, createUser } = require('../controllers/users');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.post('/login', postLogin);

module.exports = router;