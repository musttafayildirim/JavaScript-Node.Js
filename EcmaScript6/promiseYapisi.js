const tekrarEdenFonksiyon = function (sayi, callback) {
    const sonuc = sayi + 2;
    callback(sonuc);
};

tekrarEdenFonksiyon(2,function (sonuc) {
    console.log(sonuc);
    tekrarEdenFonksiyon(6,function (sonuc) {
        console.log(sonuc);
        tekrarEdenFonksiyon(9,function (sonuc) {
            console.log(sonuc);
            tekrarEdenFonksiyon(10,function (sonuc) {
                console.log(sonuc);
                tekrarEdenFonksiyon(15,function (sonuc) {
                    console.log(sonuc);
                    tekrarEdenFonksiyon(32,function (sonuc) {
                        console.log(sonuc);
                    })
                })
            })
        })
    })
});

// Bu iki kod yaklaşık olarak aynı şeyleri yapıyorlar ve aşağıdakinin okunurluğu ondan kat be kat daha fazla :D


console.log("Gözüktüğü üzere iç içe girdikçe çok saçma bir hal almaya başlıyor bunun için promise yapısını EcmaScript 6 ile birlikte gelen kullnanıyoruzzz..");

const tekrarEden = (sayi1) => {
    return new Promise((resolve,reject) =>{
        if (sayi1 == 5){
           resolve("Her şey yolunda hiç bir sorun yok :D");
        }
        else{
            reject("Bir sorun var Abi !!! :( ");
        }
    })
};

tekrarEden(5)
    .then((veri) => {
        console.log(veri);
        return veri + 5;
    })
    .then((veri) => {
        console.log(veri);
        return veri+1;
    })
    .then((veri) => {
        console.log(veri);
    })
    .catch((error) => {
        console.log(error);
    });