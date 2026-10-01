const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username feild is required"],
        unique: [true, "username already exisits"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "account with this email already exists"]
    },
    password: {
        type: String,
        required: [true, "password feild is required"]
    }
})


const userModel = mongoose.model("users", userSchema)

module.exports = userModel