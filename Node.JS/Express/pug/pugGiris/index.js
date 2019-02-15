const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('deneme');
});

app.listen(2001,() =>{
    console.log("Express Çalıştı...");
});