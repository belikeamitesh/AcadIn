const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    followers: {
        type: Array,
        default: [],
    },
      followings: {
        type: Array,
        default: [],
    },
    bio: {
        type: String
    }
})

module.exports = mongoose.model("User", userSchema);