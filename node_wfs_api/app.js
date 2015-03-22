var fs = require('fs'); 
var http = require('http'); 
var express = require('express');
// var Utils = require('./models/Utils.js'); 
var appPath = __dirname;  
var configFile = require(appPath+'/conf/app.conf.json'); 
var methodObjects = {}; 
var WFSMethod = require(appPath+'/models/WFSMethod.js'); 
var WFSMethodGetFeature = require(appPath+'/models/WFSMethodGetFeature.js'); 
var app = express(); 

// Class definition 
var wfsMethods = {}; 

// Load method instances into memory 
FillMethodObjects(); 
// Init server 
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('WFS layer app listening at http://%s:%s', host, port); 
}); 

// Get http request (view, router) 
app.get('/wfs', function (req, res) 
	{ 
		// Check that query has params, send error otherwise 
		var existsQueryParams = req.query.request; 
		if (!existsQueryParams) 
		{	
			SendError(res, 400, 'Query not recognized'); 
			return; 
		} 

		// Extract request param == method to call 
		var candidateMethod = req.query.request;  
		var methodToCall = GetMethodObject(candidateMethod); 
		if (methodToCall === undefined) 
		{
			sendError(res, 400, 'Method not recognized'); 
			return;  
		} 

		// Create new instance of the method 
		// 		// Call check params and get result 
		// 		// Parse params 
		// 		// Send request to server 
		// 		// Return result to user (pipe? pipe result from server to user)
		var methodInstance = new methodToCall(req.query); 
		if (!methodInstance instanceof WFSMethod) 
		{
			sendError(res, 400, 'Method type mismatch'); 
		}

		var existsMandatoryParams = methodInstance.fillMandatoryParams(); 
		if(!existsMandatoryParams) {  
			sendError(res, 400, 'Params mismatch'); 
			return;  
		} 

		methodInstance.fillOptionalParams();  
		var url = methodInstance.createRequest(); 
		DispatchRequest(url, res); 
	}
); 

// Once url is correctly formed, send request to API 
function DispatchRequest(url, requestResponse) 
{
	http.get(url, function(response){ 
		response.once('data', function(){
			requestResponse.status(202); 
			response.pipe(requestResponse);  
		}); 
		response.once('error', function(error){ 
			sendError(requestResponse, 404, error); 
			// requestResponse.status(404).json({'error':error}); 
		}); 
		response.once('end', function(){ 
			requestResponse.end(); 
		});
	}).once('error', function(error){	
		// requestResponse.status(202).json({'error':error}); 
		sendError(requestResponse, 404, error); 
	});   
}

function SendError(responseStream, statusCode, error) 
{
	responseStream.status(statusCode).json({'error':error}).end();
}

// Get logic function to call from request query param (Controller) 
function GetMethodObject(candidateMethod) 
{
	if (methodObjects[candidateMethod] !== undefined)
		return methodObjects[candidateMethod]; 
	return undefined; 
} 

function FillMethodObjects() 
{ 
	console.dir(configFile.availableMethods[0].GetFeature.ModelDefinition); 
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