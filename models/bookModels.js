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
    }
})

const BookModel = mongoose.model('Book',bookSchema);
module.exports = BookModel;