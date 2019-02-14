const http = require('http');

const server = http.createServer((request,response)=>{
   response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});

   if(request.method === "GET"){
       if (request.url === '/')
           response.write("İndex sayfasındasın genç");
       else if(request.url === '/iletisim')
           response.write("İletişim sayfası burası");
       else
           response.write("Bizde Böyle bir sayfa yok...");
   }
   response.end();
});

server.listen(1002);