"use strict";
const http = require('http');

/*Burada bir http server oluşturduk... Daha sonra bu serverdan birisi istekte bulunursa ona karşı response döndük :D */

const server = http.createServer((request, response) => {
    console.log('Bir istekte bulunuldu..');
    
    console.log(request);
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    response.write("Merhaba bu benim ilk <b>backend</b> programım :D");
    response.end();
});

// Burası serverı dinleme işlemi :D
server.listen(1000);


/*Ama bizim burada şöyle bir sorunumuz oluyor biz her yaptığımız işlem için tekrar tekrar konsolu yenilememiz gerekiyor.
* Ama bu işlem çok sıkıcı ve bazen unutabileceğimiz için bunun yerine nodemon adındaki paketi -g olarak yüklüyoruz ve bundan sonra
* gönül rahatlığıyla http serverımızı oluşturabiliyoruz..Bundan sonra node createHTTPServer değilde nodemon createHTTPServer
 * dememiz gerekiyor konsol üzerinden....
* */

