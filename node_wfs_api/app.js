var express = require('express');
var http = require('http'); 
var Utils = require('./models/Utils.js'); 
var WFSMethod = require('./models/WFSMethod.js'); 
var WFSMethodGetFeature = require('./models/WFSMethodGetFeature.js'); 
var app = express(); 

var utils = new Utils(); 

// Logic function definition 
var wfsMethods = {GetFeature:GetFeatureService}; 
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
		var methodToCall = GetRequestMethod(requestMethod); 
		if (methodToCall) 
		{
			methodToCall(req.query); 
			res.status(202).json(
				{'result':'ok'}); 
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
	res.end(); 
}); 

// Get logic function to call from request query param (Controller) 
function GetRequestMethod(request) {
	if (request == "GetFeature") 
	{
		return wfsMethods.GetFeature; 
	} 
	else 
	{
		return undefined; 
	}
} 

// Execute method (Model) 
function GetFeatureService(queryParams) 
{ 
	// {Mandatory fields: [{request:GetFeature},{typename:feature_table_id}]} 
	var expectedParams = ['request', 'typename']; 
	console.log("Method called"); 
	console.dir(queryParams); 
	var paramsString = ""; 
	Object.keys(queryParams).forEach( 
			function(key,index){
				paramsString += 
				key + 
				"=" + 
				queryParams[key] + 
				(index<Object.keys(queryParams).length-1 ? "&" : ""); 
			}); 
	var tableName = queryParams.typename.split(":").slice(1); 
	testGeoServerUrl += '?' + paramsString; 
	testCartoUrl += "?q=SELECT+*+FROM+"+tableName+"&api_key=bd6a0a7c3d64f870e375cd57489121e1fd9515e0&format=GeoJSON"; 
	utils.doGet(testCartoUrl); 
} 

// // Do request (Utils) 
// function doAPIGet(url) {
// 	http.get(url, function(response){ 
// 		var data = ""; 
// 		response.on('data', function(chunk){
// 			data += chunk; 
// 		}); 
// 		response.on('end', function(){
// 			console.dir(data); 
// 		}); 
// 		response.on('error', function(){
// 			console.log("Error ocurred while getting features..."); 
// 		}); 
// 	}); 
// } 


