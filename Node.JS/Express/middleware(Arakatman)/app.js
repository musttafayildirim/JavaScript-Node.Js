const express = require('express');
const app = express();

app.set('view engine', 'pug');


const singIn = require('./routes/signIn');
const singUp = require('./routes/signUp');




app.use('/', singIn);
app.use('/user', singUp);


app.listen(3005, (req, res) => {
   console.log('express çalıştı nolduu :DD');
});