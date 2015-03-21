var express = require('express');
var http = require('http'); 
var Utils = require('./models/Utils.js'); 
// var WFSMethod = require('./models/WFSMethod.js'); 
var WFSMethodGetFeature = require('./models/WFSMethodGetFeature.js'); 
var app = express(); 
var utils = new Utils(); 

// Class definition 
var wfsMethods = { 
	GetFeature:WFSMethodGetFeature, 
	GetCapabilities:GetCapabilitiesService 
}; 

// Test urls 
var testCartoUrl = "http://jarpi.cartodb.com/api/v2/sql";  
// var testGeoServerUrl = 'http://localhost:8080/geoserver/wfs'; 

// Server listen init 
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port); 
}); 

// Get http request (view, router) 
app.get('/wfs', function (req, res) { 
	
	// Check that query params exists, send error otherwise 
	var existsQueryParams = req.query.request; 
	if (!existsQueryParams) 
	{	
		sendError(res, 'Query needed'); 
		return; 
	} 

	// Get method to call 
	var queryRequestMethod = req.query.request;  
	var methodToCall = GetMethodFromRequest(queryRequestMethod); 
	if (methodToCall === undefined) 
	{
		sendError(res, 'Method not recognized'); 
		return;  
	}

	// Create new instance of the method 
	// 		// Call check params and get result 
	// 		// Parse params 
	// 		// Send request to server 
	// 		// Return result to user (pipe techinque? pipe result from server to user)
	var a = new methodToCall(req.query); 
	var isParamsMatch = a.fillMandatoryParams(); 
	a.fillOptionalParams();  
	if(!isParamsMatch) {  
		sendError(res, 'Params mismatch'); 
		return;  
	} 
	var url = a.createRequest(); 
	dispatchRequest(url, res); 

	// if (existsQueryParams) 
	// {	
	// 	// Get method to call 
	// 	var queryRequestMethod = req.query.request;  
	// 	var methodToCall = GetMethodFromRequest queryRequestMethod); 
	// 	if (methodToCall !== undefined) 
	// 	{
	// 		// Create new instance of the method 
	// 		// Call check params and get result 
	// 		// Parse params 
	// 		// Send request to server 
	// 		// Return result to user (pipe techinque? pipe result from server to user)
	// 		var a = new methodToCall(req.query); 
	// 		var isParamsMatch = a.fillMandatoryParams(); 
	// 		a.fillOptionalParams();  
	// 		if(isParamsMatch) {  
	// 			a.fillOptionalParams()  
	// 			var url = a.createRequest(); 
	// 			dispatchRequest(url, res); 
	// 		} 
	// 	} 
	// 	// Method does not exist  
	// 	else 
	// 	{ 
	// 		res.status(404).json(
	// 			{'error':'Method not recognized'}).end(); 
	// 	} 
	// } 
	// // There are no query params 
	// else 
	// {
	// 	res.status(404).json(
	// 			{'error':'Query needed'}).end(); 
	// } 
}); 

// Get logic function to call from request query param (Controller) 
function GetMethodFromRequest(request) 
{
	if (request == "GetFeature") 
	{
		return wfsMethods.GetFeature; 
	} 
	else if (request == "GetCapabilities") 
	{
		return wfsMethods.GetCapabilities; 
	}
	else 
	{
		return undefined; 
	}
} 

function GetCapabilitiesService() 
{
	console.log("GetCapabilitiesService"); 
} 

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

