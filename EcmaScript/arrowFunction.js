console.log("Bizim normal şartlarda kullandığımız fonksiyonumzu bu şekldeydi...");

var fonksiyonum = function (sayi1,sayi2) {
    return sayi1+sayi2;
}

console.log(fonksiyonum(5,7));



console.log("Ama bu işlem biraz fazla yer kapladığından ve pratik olmadığı için array fonksiyonlarla bunu şu şekilde yazıyoruz...");

const yeniFonksiyon = (sayi3,sayi4)=> sayi3+sayi4;

console.log(yeniFonksiyon(5,7));
