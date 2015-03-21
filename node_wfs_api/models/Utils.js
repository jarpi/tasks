var http = require('http'); 

function Utils() {}; 

Utils.prototype.doGet = function (url, cb) 
{
	http.get(url, function(response){ 
		var data = ''; 
		response.on('data', function(chunk){
			data += chunk; 
		}); 
		response.on('end', function(){ 
			return cb(null,data); 
		}); 
		response.on('error', function(){
			data = "Error ocurred while parsing features..."; 
		}); 
	}).on('error',function(error){ 
		return cb(null,error); 
	}); 
}; 

module.exports = Utils; 

