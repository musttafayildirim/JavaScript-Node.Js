console.log("JavaScript'te Scope kavramı çok önemlidir. Şimdi burada tanımladığımız bir x değişkeni ile fonksiyonun içerisinde tanımladığımız x değişkeni birbirinden farklıdır.");

var x = 15;

function degiskenTanimlama(){
    var x = "Bu bir string değerdir...";
    console.log(x);
}

degiskenTanimlama();
console.log(x);



console.log("Ama biz en üstte tanımlamış olduğumuz global değişkeni aşağıda kullanırsak işler değişecek..");

function abdul() {
    x = "abdülmelik";
    console.log(x);
}

abdul();
console.log(x);
