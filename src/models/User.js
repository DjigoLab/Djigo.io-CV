const mongoose = require('mongoose')
const {
    Schema
} = mongoose

const User = new Schema({
    name: String,
    type: String,
    logo: String,
    nationality: String,
    age: Number,
})

module.exports = mongoose.model('User', User);