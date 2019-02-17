const express = require('express');
const mongoose = require('mongoose');
const  router = express.Router();

//Modelleri buraya yazıyoruz...

const Book = require('../models/Books')

router.get('/books', function(req, res, next) {
    const book = new Book({
        title : 'Üçüncü',
        published: true,
        comments: [
            {message: "Harika bir kitap"},
            {message: "Yazar çok güzel anlatmış olayı..."}
        ],
        meta:{
            votes: 150,
            favs: 250
        }

    });

    book.save((err, data) => {
        if(err)
            console.log(err);
        res.json(data);
    });

});

//burada basit bir arama işlemi yapılmıştır.....
router.get('/search', (req, res) =>{
   Book.find({published: true}, 'title published', (err, data) => {
      res.json(data);
    })
});

//tek sorgu işlemi bu şekilde yapılıyor...

router.get('/oneSearch', (req, res) =>{
    Book.findOne(
        {published: true},(err, data) => {
            res.json(data);
        })
});


//Burada yapılan işlem de findById kullanılmıştır ve bu sayede bu id 'ye ait kayıt bulunduğu takdirde arama bitirilmiştir
//ve bu sayede bir obje döner bize
router.get('/searchById', (req, res) =>{
    Book.findById('5c686bac2e01487f1405c5a7',(err, data) => {
            res.json(data);
    })
});

//ama aynı işlemi farklı bir şekilde (findById kullanmadan) burada yaptığımızda göreceğiniz gibi bir array dönecektir.....
router.get('/searchByIdArr', (req, res) =>{
    Book.find({_id : '5c686bac2e01487f1405c5a7'},(err, data) => {
        res.json(data);
    })
});

router.put('/update', (req, res) => {
   Book.update({
       published : true
       },
       {
           published : false
       },
       //burada kullandığımız multi birden fazla alanı güncellememize olanak verir......
       {
           multi : true
       },
       (err, data) =>{
       res.json(data);
       })
});


// eğer güncellmek istediğimiz alanda öyle bir kayıt yoksa upsert ile oluşturmak istediğimiz gibi bir kayıt oluşturabliriz..
router.put('/updateUpsert', (req, res) => {
    Book.update({
            published : true
        },
        {
            published : false,
            title : 'bu kayıt upsert ile oluşturuldu'
        },

        {
           upsert : true
        },
        (err, data) =>{
            res.json(data);
        })
});


router.put('/updateById', (req, res) =>{
    Book.findByIdAndUpdate(
        '5c6892160dadad9f887f36f3',
    {
        title : 'findByIdAndUpdate Kullanıldı...',
        //bir obje oluşturup onun içerisindeki veriyi aşağıdaki gibi güncelleyebiliriz...
        'meta.favs' : 300
    }
        ,(err, data) => {
        res.json(data);
    })
});

//siliceğimiz veriyle ilgili önceden farklı bir işlem yapacaksak bunu kullanabiliriz...
router.delete('/remove', (req, res) => {
    Book.findById(
        '5c6892160dadad9f887f36f3', (err, book) =>{
            book.remove((err, data) => {
                res.json(data);
            });
    });
});

//verilen parametreye ait bulduğu ilk veriyi siler..
router.delete('/findOneAndRemove', (req, res) => {
    Book.findOneAndRemove({_id: '5c6869a3b4cf218c546be3f3'}, (err, data) =>{
        res.json(data);
    })
});

//verilen parametreye ait tüm kayıtları silme işlemi
router.delete('/removeAll', (req, res) => {
    Book.remove({published: false},(err, data) => {
        res.json(data);
    })
});


//sıralama işlmeleri burada -1 yazarsak büyükten küçüğe 1 yazarsak küçükten büyüğe sıralama yapar...
router.get('/sort', (req, res) => {
    Book.find({},(err, data) => {
        res.json(data);
    }).sort({'meta.favs': -1});
});


// limit belirleme işlemi içerisine verilen değer kadar kayıt listeletmeye yarayan fonksiyonumuz..

router.get('/limit', (req, res) => {
    Book.find({},(err, data) => {
        res.json(data);
    }).limit(1);
});


// skip parametresi bize istediğimiz kadar atlama yapmamızı sağlıyor....
router.get('/skip', (req, res) => {
    Book.find({},(err, data) => {
        res.json(data);
    }).skip(3);
});

//burada yaptığımız işlemde aslında bakarsanız yukarıdakine çok benzer ilk iki kayıtı geçtikten sonra 6 tane kayıt göstermesini
//istiyoruzz bize kaç tane kayıt varsa o kadarını geri dönecektir 6 olana kadar 6 kayıttan fazlasını göstermez...

router.get('/limitAndSkip', (req, res) => {
    Book.find({},(err, data) => {
        res.json(data);
    }).skip(2)
        .limit(6)
});


//burada kümeleme işlemlerini yapıyorummm..
router.get('/aggregate', (req, res) => {
   Book.aggregate([
       {
           //burada durumu publis olanları match operatörü ile yakalıyoruz.
           $match: {
               published: true
           }
       },

    // burada gruplama işlemi yapıyoruz ve bize categorylerine göre kaç tane olduklarını dönüyor...


        // {
        //     $group: {
        //         _id: "$category",
        //         total: {$sum: 1}
        //    }
        // },



       // {
       //     $project:{
       //         title : 1
       //     }
       // },

            //kümeleme işlemlerinde sort skip ve limit işlemleri aşağıda yazıldığı gibi yapılabilir....
           //başlığa göre a-z sıralaması yapıyoruz...
           {
               $sort: { title : 1}
           },
           // 3 tane limit belirliyoruz daha fazla göstermesinn
           {
               $limit: 3
           },
           // bir taneyi atladıktan sonra basmasını söylüyoruzz....
           {
               $skip : 1
           }
   ], (err, result) =>{
       res.json(result);
       }
       )
});



router.get('/aggregateLookUp', (req, res) => {
    Book.aggregate([
        {
          $match: {
              _id : mongoose.Types.ObjectId('5c68963d0b17868d3c269090')
          }
        },
        {
            $lookup: {
                from: 'users',
                localField: 'username',
                foreignField: '_id',
                as: 'user'
            }
        },
        {
            $unwind: 'user'
        },
        {
            $project: {
                'title' : 1
            }
        }
    ])
})







module.exports = router;
