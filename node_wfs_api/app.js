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
var testGeoServerUrl = 'http://localhost:8080/geoserver/wfs'; 

// Server listen init 
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port); 
}); 

// Get http request (view, router) 
app.get('/wfs', function (req, res) { 
	if (req.route.path.toLowerCase() == '/wfs' && req.query.request) 
	{
		var requestMethod = req.query.request;  
		var methodToCall = ParseMethodToCall(requestMethod); 
		if (methodToCall) 
		{
			// Create new instance of the method 
			// Call check params and get result 
			// Parse params 
			// Send request to server 
			// Return result to user (pipe techinque? pipe result from server to user)
			var a = new methodToCall(req.query); 
			var isParamsMatch = a.fillMandatoryParams(); 
			a.fillOptionalParams();  
			console.log(isParamsMatch); 
			if(isParamsMatch) {  
				a.fillOptionalParams()  
				var httpUrlRequest = a.createRequest(); 
				utils.doGet(httpUrlRequest, function(err, data){
					res.status(202).json({'result':data}); 
					res.end(); 
				}); 
			} 
		} 
		else 
		{
			res.status(404).json(
				{'error':'Method not found'}); 
		} 
	} 
	else 
	{
		res.status(404).json(
				{'error':'Malformed query'}); 
	} 
	// Need to fix 
	// res.end(); 
}); 

// Get logic function to call from request query param (Controller) 
function ParseMethodToCall(request) {
	if (request == "GetFeature") 
	{
		return wfsMethods.GetFeature; 
	} 
	else if (request == "GetCapabilities") {
		return wfsMethods.GetCapabilities; 
	}
	else 
	{
		return undefined; 
	}
} 

// Execute method (Model) // queryParams = object,value 
// function GetFeatureService(queryParams) 
// { 
// 	// {Mandatory fields: [{request:GetFeature},{typename:feature_table_id}]} 
// 	var expectedParams = ['request', 'typename']; 
// 	console.dir(queryParams); 
// 	var paramsString = ""; 
// 	Object.keys(queryParams).forEach( 
// 			function(key,index){
// 				paramsString += 
// 				key + 
// 				"=" + 
// 				queryParams[key] + 
// 				(index<Object.keys(queryParams).length-1 ? "&" : ""); 
// 			}); 
// 	var workSpace = queryParams.typename.split(":").slice(0); 
// 	var tableName = queryParams.typename.split(":").slice(1); 
// 	testGeoServerUrl += '?' + paramsString; 
// 	testCartoUrl += "?q=SELECT+*+FROM+"+tableName+"&api_key=bd6a0a7c3d64f870e375cd57489121e1fd9515e0&format=GeoJSON"; 
// 	utils.doGet(testCartoUrl); 
// } 

function GetCapabilitiesService() {
	console.log("GetCapabilitiesService"); 
} 




