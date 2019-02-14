"use strict";

const dosyaOkumaIslemi = require("fs");

dosyaOkumaIslemi.readFile("deneme.txt",(hata,veri) => {

    if (hata) {
        console.log(hata);
    } else {
        console.log(veri.toString());
    }
});
