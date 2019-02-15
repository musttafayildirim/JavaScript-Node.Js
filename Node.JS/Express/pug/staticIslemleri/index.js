const express = require('express');
const app = express();

app.set('view engine', 'pug');

//kullanacağımız static dosyalarını bu şekilde tanımlıyoruz...
app.use(express.static('public'));
app.use(express.static('public-other'));

app.get('/', (req,res) => {
    res.render('index');
});

app.listen(1000, () =>{
   console.log('express düzgün çalıştı...');
});

