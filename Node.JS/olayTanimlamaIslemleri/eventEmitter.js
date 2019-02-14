const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter .on('selamla',() => {
    console.log('Merhaba');
});

/*Burada yaptığımız işlem yazdığımız bir trigerı tetiklemek istediğimiz zaman bu şekilde bir kullanım yapıyoruz bu sayede o veriyi farklı bir yerde tetiklemiş oluyoruz..*/
// Bu veriyi defalarca tetiklemek istersek  eventEmitter.on şeklinde bir kere tetiklesin istersek eventEmitter.once şeklinde yazmamız yeterli....
eventEmitter.emit('selamla');


// BURASI'da eğer bir kere tetikleme yapacaksak ona kullanım örneği
const newEventEmitter = new events.EventEmitter();

newEventEmitter.once('merhabaDe', (object) => {
    console.log(`Merhaba ${object.name} ${object.surname}`);
});
const isim = "Mustafa";
newEventEmitter.emit('merhabaDe', {name: 'Mustafa',surname:'YILDIRIM'} );
