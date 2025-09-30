// // create chatbot messages from user and bot open api
const chatbotModel = require('../models/chatbot.model');

exports.getChatbotResponse = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    const response = await chatbotModel.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: "system", content: "You are a helpful support assistant for an eCommerce app." },
        { role: 'user', content: message }
        ],
    });
    res.json({ response: response.choices[0].message });
  } catch (error) {
    console.error('Error getting chatbot response:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

};