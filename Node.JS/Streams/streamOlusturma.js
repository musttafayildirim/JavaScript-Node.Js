const fs = require('fs');
const file = 'weka.txt';

const readStream = fs.createReadStream(file);
let progress = 0;

fs.stat(file, (err,data) =>{
   const total = data.size;

    readStream.on('data', (chunk) => {
        progress += chunk.length;
        console.log(Math.round((progress * 100)/total));
    });
});

readStream.on('end',() => {
    console.log('veri okunması tamamlandı..');
});