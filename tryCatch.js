try{
    var sayi1 = 57;
    var sayi2=75;
    var sonuc = sayi1/sayi2;

    if (sayi2==0)
        throw Error('Sayi2 0 olamaz.');
    else
        console.log(sonuc);
}catch (e) {
    console.log(e);
}finally {
    console.log("Hata olsada olmasada çalış..");
}