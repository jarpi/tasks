var http = require('http'); 

function Utils() {}; 

Utils.prototype.doGet = function (url) 
{
	http.get(url, function(response){ 
		var data = ""; 
		response.on('data', function(chunk){
			data += chunk; 
		}); 
		response.on('end', function(){
			console.dir(data); 
		}); 
		response.on('error', function(){
			console.log("Error ocurred while getting features..."); 
		}); 
	}); 
}; 

module.exports = Utils; 