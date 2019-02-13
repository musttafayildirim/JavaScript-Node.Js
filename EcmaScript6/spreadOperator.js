const dizi = ["Mustafa","Mikail","Melik","Ahmet","Mehmet"];

const dizi2 = [...dizi,1,2,3,4,5];
console.log(dizi2);

const [deger1,deger2, ...devami] = dizi2;

console.log(devami);
console.log("bunu şu şekilde de gösterebiliriz...");

console.log(...devami);

