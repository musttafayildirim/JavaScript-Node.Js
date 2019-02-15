const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Expressle Tanıştım :D');
});

app.listen(2000,() =>{
    console.log("Express Çalıştı...");
});