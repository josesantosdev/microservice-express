const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getOneUser);
router.post('/user', userController.createUser);

module.exports = router;