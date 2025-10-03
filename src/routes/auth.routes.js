const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Routes for Users
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;