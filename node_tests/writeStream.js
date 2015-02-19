var fs = require('fs'); 
var ws = fs.createWriteStream('message.txt'); 
ws.write('beep '); 
setTimeout(function(){
	ws.end('boop\n'); // Tell stream that we're done writing 
}, 1000); 


