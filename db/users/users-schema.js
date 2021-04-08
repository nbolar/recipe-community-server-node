const mongoose = require("mongoose")
const usersSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        username: String,
        password: String,
        savedRecipes: [],
        posts: [],
        following: [],
        followers: [],
        description: String
    }, {collection: "users"})

module.exports = usersSchema