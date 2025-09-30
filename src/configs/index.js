module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  openAIApiKey: process.env.OPENAI_API_KEY || '',
};
