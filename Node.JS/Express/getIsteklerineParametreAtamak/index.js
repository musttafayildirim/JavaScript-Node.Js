const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/user/:id/:postId?', (req, res) => {

    res.send(req.params);


});

app.listen(3000, () => {
    console.log("express server çalıştı....");
});