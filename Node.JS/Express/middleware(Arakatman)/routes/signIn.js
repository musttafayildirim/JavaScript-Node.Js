const express = require('express');
const router = express.Router();

router.get('/signIn', (req, res) => {
    res.send("signIn sayfasıdır burası...");
});

router.post('/signIn', (req, res) => {
   res.send("signIn post alanı");
});

router.all('/signIn', (req, res) => {
   res.render('signIn');
});

module.exports = router;