console.log("Bu alanda fonksiyonları ele alacağız....");

function yazdir(text, digerFonksiyon) {

    console.log(text);
    digerFonksiyon();

}

function isYap() {
    console.log("Ne Yapmamı İstersin")
}

yazdir("Merhaba", isYap);


console.log("yukarıdaki örnekte bir fonksiyonun içerisinde diğer bir fonskiyonu nasıl çağırabiliriz onu gösterdim.. :D");




// callback fonksiyonlara örnek olarak ....

console.log("Burada kullanmış olduğum setTimeout fonksiyonu ile bir süre bekletip öyle yazı yazdırdım....");
setTimeout(function(){
    console.log("Nasıl gidiyor...");
    } , 1000);


// setInterval fonskiyonu....


console.log("şimdi setInterval fonksiyonu kullanıyoruz..");
var say = 1;
var interval = setInterval(function (){
    if (say == 6)
        clearInterval(interval);
    console.log("Selam "+say);
    say++;
}, 1000);

