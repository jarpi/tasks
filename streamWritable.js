var Writable = require('stream').Writable; 
var ws = new Writable(); 

// Custom write function 
ws._write = function (chunk, enc, next) { 
	var str = ""; 
	for (i=0;i<chunk.length-1;i++) 
		str+=String.fromCharCode(chunk[i]); 
	console.log(str); 
	next(); 
	// new Error("Error happened") 
}; 

process.stdin.pipe(ws); 

ws.on('error', function(error){
	console.dir(error);
}); 


