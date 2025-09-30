const userModel = require('../models/user.model');

// Get user by username from github
async function getUserByUsername(req, res) {
    const username = req.params.username;
    try {
        const user = await userModel.getGithubProfileUrl(username);
        res.json(user);
    } catch (error) {
        if (error.message === "User not found") {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = { getUserByUsername };