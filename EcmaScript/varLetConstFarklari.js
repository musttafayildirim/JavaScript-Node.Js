console.log("Biz bundan sonra değişken tanımlamalarında var yerine let ve const ile devam ediyorum. Aşağıda durumu anlatacağım");

var degisken = "Bu alan değişkenin içeriği";


for (var i=0;i<5;i++){

//    burada herhangi bir işlem yapmıyorum..
}

console.log(i+degisken);
console.log("Görüldüğü üzere for dışında i'yi kullanmamıza rağmen for'da dönen i değerini for'un dışında yazdırdı.. Normalde böyle bir işlem bizim" +
    "işlemlerimiz için çok kullanışlı olmayacaktır. Bunun için bundan sonra EcmaScript altında yazıyoruz kodlarımızı ve var yerine let " +
    "kullanıyoruz..");


for (let k=0;k<5;k++){
//    burada da herhangi bir tanımlama yapmıyorum fakat aşağıda kullanmaya çalışınca hata verecek..
}

//console.log(k);

console.log("Aldığımız hata k is not defined");

console.log("Şimdi const ile let arasında karşılaştırma yapıyoruz..");

console.log("Eğer bir değeri bir daha değiştirmeyeceksek bu yeniden declare etmek anlamında yani tamamen yeniden tanımlamak yapmayacaksak " +
    "const ile değerimizi tanımlıyoruz ama ilerleyen yerlerde tekrardan değişkenin değerini değiştirmek istersek" +
    "o zaman let ile tanımlamamız gerekemktedir.... " +
    "\n aşağıda buna bir örnek veriyorum..");


const degistirilmeyecekDeger = 3.14;

console.log(degistirilmeyecekDeger);

console.log("Şimdi gelin bu değeri değiştirmeyi deneyelim...");

// degistirilmeyecekDeger = 3;

console.log("Başındaki kesme işaretlerini kaldırırsanız bunun tanımlanmayan değer olduğunu anlarsınız... Ve  Assignment to constant variable" +
    "böyle bir hatayla karşı karşııya kalırsınız...");

console.log("Ama biz burada değerimizi let ile tanımlarsak");

let buDegerIlerideDegistirilebilir = 15;
console.log(buDegerIlerideDegistirilebilir);
buDegerIlerideDegistirilebilir = 11;
console.log(buDegerIlerideDegistirilebilir);

console.log("Görüldüğü üzere değerler değiştirilmiştir...");


