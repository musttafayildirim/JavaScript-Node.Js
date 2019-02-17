const expres = require('express');
const router = expres.Router();



// Eğer bu şekilde kullanırsak sadece bu sayfa için bu ara katmanı tanımlamış oluruz ama bunu app.js dosyasının içerisinde
//yaparsak tüm sayfalarımız için kullanıcının giriş yapıp yapmadığını kontrol etmiş oluruz....
const isLogin = require('../helper/isLogin');
router.use(isLogin);

router.get('/signUp', (req, res) => {
   res.send('SignUp sayfası get');
});

router.post('/signUp', (req, res) =>{
   res.send('Signup post alanı');
});

module.exports = router;