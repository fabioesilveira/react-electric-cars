const express = require('express');
const { getAll, getById, create, getFavoritesByUserId } = require('../controllers/favoriteCars');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.get('/user/:userId', getFavoritesByUserId);
router.post('/', create);

module.exports = router;