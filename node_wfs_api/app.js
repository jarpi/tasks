var fs = require('fs'); 
var http = require('http'); 
var express = require('express');
// var Utils = require('./models/Utils.js'); 
var configFile = require('./app.conf.json'); 
var appPath = __dirname;  
var methodInstances = {}; 
// var WFSMethod = require('./models/WFSMethod.js'); 
var WFSMethodGetFeature = require('./models/WFSMethodGetFeature.js'); 
var app = express(); 
// var utils = new Utils(); 

// Class definition 
var wfsMethods = { 
	GetFeature:WFSMethodGetFeature, 
	GetCapabilities:GetCapabilitiesService 
}; 

// Test urls 
var testCartoUrl = "http://jarpi.cartodb.com/api/v2/sql";  
// var testGeoServerUrl = 'http://localhost:8080/geoserver/wfs'; 

// Load method instances into memory 
fillMethodInstances(); 
// Init server 
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port); 
}); 

// Get http request (view, router) 
app.get('/wfs', function (req, res) { 
	
	// Check that query has params, send error otherwise 
	var existsQueryParams = req.query.request; 
	if (!existsQueryParams) 
	{	
		sendError(res, 'Query needed'); 
		return; 
	} 

	// Extract request param == method to call 
	var methodFromQuery = req.query.request;  
	var methodToCall = GetMethodToCall(methodFromQuery); 
	if (methodToCall === undefined) 
	{
		sendError(res, 'Method not recognized'); 
		return;  
	}

	// Create new instance of the method 
	// 		// Call check params and get result 
	// 		// Parse params 
	// 		// Send request to server 
	// 		// Return result to user (pipe? pipe result from server to user)
	if (false === true) 
	{
		var a = new methodToCall(req.query); 
		var existsMandatoryParams = a.fillMandatoryParams(); 
		if(!existsMandatoryParams) {  
			sendError(res, 'Params mismatch'); 
			return;  
		} 
		a.fillOptionalParams();  
		var url = a.createRequest(); 
		dispatchRequest(url, res); 
	}
}); 

// Once url is correctly formed, send request to API 
function dispatchRequest(url, requestResponse) 
{
	http.get(url, function(response){ 
		response.once('data', function(){
			requestResponse.status(202); 
			response.pipe(requestResponse);  
		}); 
		response.once('error', function(error){
			requestResponse.status(404).json({'error':error}); 
		}); 
		response.once('end', function(){ 
			requestResponse.end(); 
		});
	}).once('error', function(error){	
		requestResponse.status(202).json({'error':error}); 
	});   
}

function sendError(responseStream, error) 
{
	responseStream.status(404).json({'error':error}).end();
}

// Get logic function to call from request query param (Controller) 
function GetMethodToCall(request) 
{
	
	// if (request == "GetFeature") 
	// {
	// 	return wfsMethods.GetFeature; 
	// } 
	// else if (request == "GetCapabilities") 
	// {
	// 	return wfsMethods.GetCapabilities; 
	// }
	// else 
	// {
	return undefined; 
	// }
} 

function fillMethodInstances() { 
	for (i=configFile.availableMethods.length-1;i>=0;i--) 
	{ 
		var obj = configFile.availableMethods[i]; 
		for (property in obj) 
		{	
			if (fs.existsSync(appPath+obj[property])) 
			{ 
				var method = require(appPath+obj[property]); 
				methodInstances[property] = method; 
				console.dir(methodInstances); 
			} 
			else 
			{ 
				throw new Error("Check your config file, available methods contains errors"); 
			} 
		} 
	} 
} 

function GetCapabilitiesService() 
{
	console.log("GetCapabilitiesService"); 
} 
