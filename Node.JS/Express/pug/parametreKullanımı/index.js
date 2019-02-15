const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('deneme',{name:'Mustafa', surname:'YILDIRIM'});
});

app.listen(2001,() =>{
    console.log("Express Çalıştı...");
});