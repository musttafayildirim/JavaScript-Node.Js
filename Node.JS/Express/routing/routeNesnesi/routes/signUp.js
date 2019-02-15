const expres = require('express');
const router = expres.Router();

router.get('/signUp', (req, res) => {
   res.send('SignUp sayfası get');
});

router.post('/signUp', (req, res) =>{
   res.send('Signup post alanı');
});

module.exports = router;