"use strict";
const fs = require('fs');

fs.unlink('naber.txt', (err) =>{
   if(err){
       console.log("dosya silinmedi");
   }
   else
       console.log("Dosya silindi.");
});