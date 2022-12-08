const mongoose = require("mongoose")

const taskModel = new mongoose.Schema({
    username: String,
    email: String,
    password : String,
    date: {
        type: Date,
        default: Date.now,
    }
})

const task = mongoose.model("task", taskModel)


module.exports = task;