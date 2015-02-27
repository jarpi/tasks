// Javascript runner 
// Read a file containing a function and eval() it 

var fs = require('fs');  
var fileName = process.argv[2]; 
var fileData = ""; 
fs.readFile(fileName,'utf-8', function(err,data) {
	if (err) 
		return err; 
	eval(data); 
}); 