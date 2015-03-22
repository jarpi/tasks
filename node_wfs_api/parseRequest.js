var appPath = __dirname;  
var configFile = require(appPath+'/conf/app.conf.json'); 
var methodObjects = {}; 
var methodObjectsParams = {}; 
var WFSMethod = require(appPath+'/models/WFSMethod.js'); 
var WFSMethodGetFeature = require(appPath+'/models/WFSMethodGetFeature.js'); 

function ParseRequest() {} 

// Once url is correctly formed, send request to API 
ParseRequest.prototype.DispatchRequest = function (url, responseStream) 
{
	http.get(url, function(response){ 
		response.once('data', function(){
			responseStream.status(202); 
			response.pipe(responseStream);  
		}); 
		response.once('error', function(error){ 
			sendError(responseStream, 404, error); 
		}); 
		response.once('end', function(){ 
			responseStream.end(); 
		});
	}).once('error', function(error){	
		sendError(responseStream, 404, error); 
	});   
}

ParseRequest.prototype.SendError = function (error, statusCode, responseStream) 
{
	responseStream.status(statusCode).json({'error':error}).end();
}

// Get logic function to call from request query param (Controller) 
ParseRequest.prototype.GetMethodObject = function (candidateMethod) 
{
	if (methodObjects[candidateMethod] !== undefined)
		return methodObjects[candidateMethod]; 
	return undefined; 
} 

// Create an object association between {layer_method} ---> {[Function]}
ParseRequest.prototype.FillMethodObjects = function() 
{ 
	for (i=configFile.availableMethods.length-1;i>=0;i--) 
	{ 
		var obj = configFile.availableMethods[i]; 
		for (property in obj) 
		{ 
			if (fs.existsSync(appPath+obj[property].ModelDefinition)) 
			{ 
				var method = require(appPath+obj[property].ModelDefinition); 
				methodObjects[property] = method; 
			} 
			else 
			{ 
				throw new Error("Check your config file, available methods array contains errors"); 
			} 
		} 
	} 
} 

// Create an object association between {layer_method} ---> {[Params]}
ParseRequest.prototype.FillMethodParams = function () 
{
	for (i=configFile.availableMethods.length-1;i>=0;i--) 
	{ 
		var obj = configFile.availableMethods[i]; 
		for (property in obj) 
		{
			methodObjectsParams[property] = obj[property].Params; 
		} 
	}	
} 


