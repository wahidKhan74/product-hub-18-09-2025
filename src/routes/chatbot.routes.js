// create routes for chatbot messages from user and bot open api
const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbot.controller');

router.post('/chatbot', chatbotController.getChatbotResponse);

module.exports = router;