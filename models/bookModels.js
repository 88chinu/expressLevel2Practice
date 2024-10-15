const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
        unique: true
    },
    author:{
        type: String, //add require to make it a mandatory parameter
        require: true //add unique constrain to prevent duplicates
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    }, 
    password: {
        type: String,
        required: true,
        max:1024,
        min: 6
    },
})

const BookModel = mongoose.model('Book',bookSchema);
module.exports = BookModel;