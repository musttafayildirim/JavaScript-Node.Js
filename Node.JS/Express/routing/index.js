const express = require('express');
const app = express();

/*
* get, post, put, delete, all methodlarının kullanımı
*
  ? zorunlu olmayan yeri temsil eder... ~ mu(st)?afa şeklinde kullandığımızda linkte st olmasada bize orayı göndürür..
  * yerine ne gelirse gelsin anlamında
   + solundaki ifadeden istediğiniz kadar gelebilir yine linke gider....
*
* */

app.set('view engine', 'pug');

app.get('/index', (req,res) => {
    res.send('index get method');
});

app.post('/index', (req,res) => {
    res.send('index get method');
});

app.all('/index', (req,res) => {
    res.render('index.pug');
});


app.listen(2000, () => {
    console.log("express server çalıştı....");
});

