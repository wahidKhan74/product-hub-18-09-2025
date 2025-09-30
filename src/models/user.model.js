const axios  = require("axios");

async function getGithubProfileUrl(username) {
    if (!username) {
        throw new Error("Username is required");
    }
    return await axios.get(`https://api.github.com/users/${username}`)
        .then(response => response.data)
        .catch(error => {
            if (error.response && error.response.status === 404) {
                throw new Error("User not found");
            } else {
                throw new Error("Error fetching data from GitHub");
            }
        });
    }

module.exports = { getGithubProfileUrl };