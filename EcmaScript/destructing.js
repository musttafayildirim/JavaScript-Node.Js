const degerler ={
    deger1 : 'deger1',
    deger2: "deger2",
    deger3: "deger3",
    deger4:{
        isim: "mustafa"
    }
};

const {deger1,deger2,deger3,deger4:{isim:name}} = degerler;
console.log(deger1,deger2,deger3,name);