const mongoose = require('mongoose');
const wishSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Wish', wishSchema);