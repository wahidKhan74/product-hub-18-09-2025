// create a model for chatbot messages from user and bot open api
const openAI = require('openai');
const configs = require('../configs');

const openai = new openAI.OpenAI({
  apiKey: configs.openAIApiKey,
});

module.exports = openai;


