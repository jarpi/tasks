// Javascript runner 
// Read a file containing a function and eval() it 

var fs = require('fs'); 
var path = require('path'); 
var fileNameRoutesToListen = "routes.json"; 
var customFileNameFunctions = process.argv[2]; 

function loadCustomFunctions() {
	fs.readFile(fileName,'utf-8', function(err,data) {
		if (err) 
			return err; 
		eval(data); 
	}); 
}

function loadRoutes() {
	fs.readFile(path.resolve(__dirname, fileNameRoutesToListen), 'utf-8', function(err,data){
		if (err) 
			console.dir(err); 
		// Parse JSON (get json as object)
		var settings = JSON.parse(data); 
		// Check for functions list, file, http, github ... 
		settings.routes.forEach(function(elem){
			console.log(elem.endpoint); 
		}); 
		// Listen on http for each endpoint 
		// ... 
	}); 
} 

loadRoutes(); 


