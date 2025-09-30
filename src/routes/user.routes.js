const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Route to get user by username
router.get('/:username', userController.getUserByUsername);

module.exports = router;