"use strict";

console.log("Bu alanda dosya oluşturma ve yazmayı gerçekleştiriyoruz. Bunun için kullanmamız gereken iki tane \n" +
    "fonksiyon var bunlar appendFile ve writeFile");

console.log("Bunlardan appendFile eğer dosya varsa üzerine ekleyerek yazıyor dosya yoksa oluşturuyor...\n" +
    "writeFile'da dosya yoksa oluşturuyor aynı şekilde varsa içeriğini değiştirip yazıyor..");
const fs = require('fs');

fs.writeFile("naber.txt","burada yazanlar dosyanın içinde olmalı", (err) => {
    if(err)
        console.log("Yazma işleminde hata var");
    else
        console.log('writeFile içerisi yazıldı...');


    fs.appendFile("naber.txt"," Bunlar appendfile içerisinden gelen değerler ama bunlar asenkron çalışııyorlar bakalım nolcak", (err) => {
        if(err)
            console.log("Yazma işleminde hata var");
        else
            console.log('AppendFile içerisi yazıldı..');
    });
});



