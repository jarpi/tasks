var express = require('express');
var http = require('http'); 
var app = express(); 

// Logic function definition 
var wfsMethods = {GetFeature:GetFeatureService}; 

// Server listen init 
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port); 
}); 

// Get http request (view, router) 
app.get('/wfs', function (req, res) { 
	if (req.route.path.toLowerCase() != "/wfs") 
	{
		res.status(404).json({'error':'Path not found'}); 
	} 
	else 
	{
		if (!req.query.request) 
		{
			res.status(404).json({'error':'Method not found'}); 
		} 
		else 
		{
			var requestMethod = req.query.request;  
			var methodToCall = GetRequestMethod(requestMethod); 
			if (methodToCall) 
			{
				methodToCall(req.query); 
				res.status(202).json({'result':'ok'}); 
			} 
			else 
			{
				res.status(404).json({'error':'Method not found'}); 
			} 
		} 
		res.end();
	} 
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
function GetFeatureService(queryParams) { 
	// {Mandatory fields: [{request:GetFeature},{typename:feature_table_id}]} 
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
	
	console.log(paramsString); 
	var url = 'http://localhost:8080/geoserver/wfs?' + paramsString; 
	doAPIGet(url); 
} 


function doAPIGet(url) {
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
}


