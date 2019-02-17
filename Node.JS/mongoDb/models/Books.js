const mongoose = require('mongoose');
const Schema = mongoose.Schema;



/*
* burada veri tabanını oluştururken kullanacağımız yapılarda
* type => veri tipini
* default => o alan için default atanan değeri
* require => zorunlu olup olmadığını
* unique => alanın benzersiz olup olmadığını belirlemek için
* kullanılır.........
* */


const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    published: Boolean,
    comments: [{message: String}],
    meta : {
        votes:Number,
        favs : Number
    }


});

module.exports = mongoose.model('books', BookSchema);
