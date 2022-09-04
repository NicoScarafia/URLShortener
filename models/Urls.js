const mongoose = require('mongoose')

const URLSchema = new mongoose.Schema({
    fullURL: {
        type: String,
        unique: true,
        required: true
    },
    shortURL: {
        type: String,
        unique: true,
        required: true,
    }
})

const Url = mongoose.model('Url', URLSchema)
module.exports = Url