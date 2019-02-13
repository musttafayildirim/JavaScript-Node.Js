console.log("Merhaba Karşılaştırma işlemleri yapacağım ve bunun karşılığında bizlere true veya false gibi ifaderler dönecektir... ");


var sayi = 25;

console.log("burada sayi değişkenimiz içerisine 25 değerini attık..");

console.log("daha sonra bu değeri karşılaştırıyorum..");

console.log(sayi == 25);
console.log("Burada true demesinin denedi sayi ile 25 değerini karşılaştırmasıydı bunu şu şekilde yaparsakta true diyecektir..");

console.log(sayi == "25");

console.log("fakat aşağıda belirttiğim gibi olduğu zaman true demeyecek çünkü artık tür bazlıda karşılaştırma yapacaktır..");
console.log(sayi === "25");

console.log("yalnız bu şekilde kullanırsak true değerini okuruz...");
console.log(sayi=== 25);


console.log("bu olayı bitirdikten sonra diğer kullanabileceğimiz karşılaştırma operatörleri == === < > >= <= ve != !==(buda veri türü dahil eşit değilse anlamındadır.) ");


console.log("bu bize false dönecek");
console.log(sayi != 25);

console.log(sayi > 25);
console.log("sayi 25 ten büyük olmadığı için false döndü..");
