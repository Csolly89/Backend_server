const mongoose = require('mongoose')

// name,age,location,favorite color
const PersonScema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    favoriteColor: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model('Person', PersonScema)