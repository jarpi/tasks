var Readable = require('stream').Readable; 
function Item(c) {
  this.letter = String.fromCharCode(c);  
} 
var rs = new Readable({objectMode:true}); 
var c = 97-1; 

rs._read = function() {
	if (c >='z'.charCodeAt(0)) return rs.push(null); 

	setTimeout(function() { 
		// rs.push(String.fromCharCode(++c)); 
		rs.push(JSON.stringify((new Item(++c)))); 
	}, 100); 
}; 

rs.pipe(process.stdout); 

process.on('exit', function(){
	console.error('\n read() called ' + (c-97) + ' times c:' + c); 
}); 

// SIGPIPE == EPIPE 
process.stdout.on('error', process.exit); 






