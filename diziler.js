/*Belli verileri bir arada tutmamızı sağlarlar...*/

var dizi = [];
dizi = ["mustafa","YILDIRIM"];

console.log(dizi[0]);
console.log(dizi[1]);

console.log("tüm dizinin içeriğini gösterir..");
console.log(dizi);

console.log("Eğer tüm diziyi saydırmak istersek...");
for (var i =0 ; i<dizi.length; i++){
    console.log(dizi[i]);
}


console.log("Bu alanda da for döngüsüyle yapılan işlem forEach ile yapılmıştır....");
dizi.forEach(function (deger) {
    console.log(deger);
})