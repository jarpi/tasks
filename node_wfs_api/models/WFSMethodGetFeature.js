var WFSMethod = require('./WFSMethod.js'); 

function WFSMethodGetFeature(queryParams) 
{ 
	WFSMethod.call(this, queryParams); 
	this.mandatoryParams = {
		request:undefined,
		typename:undefined
	}; 
	this.optionalParams = {
		aliases:undefined, 
		srsName:undefined, 
		projection_clause:undefined, 
		filter:undefined, 
		filter_language:undefined, 
		resourceid:undefined, 
		bbox:undefined, 
		sortby:undefined, 
		stored_query_id:undefined, 
		stored_query_parameter:undefined
	}; 
}; 

WFSMethodGetFeature.prototype = Object.create(WFSMethod.prototype); 
WFSMethodGetFeature.prototype.constructor = WFSMethodGetFeature;  

WFSMethodGetFeature.prototype.fillMandatoryParams = function() { 
	var that = this; 
	var iOkParamsCount = 0; 
	Object.keys(this.mandatoryParams).forEach( 
			function(key){ 
				if (!key in that.queryParams && that.queryParams[key] === undefined) 
					return -1; 
				iOkParamsCount += 1; 
				that.mandatoryParams[key] = that.queryParams[key]; 
			}); 
	return (iOkParamsCount == Object.keys(this.mandatoryParams).length);  
}; 

WFSMethodGetFeature.prototype.fillOptionalParams = function() { 
	var that = this; 
	var iOkParamsCount = 0; 
	Object.keys(this.optionalParams).forEach( 
			function(key){ 
				if (key in that.queryParams && that.queryParams[key] !== undefined) 
					that.optionalParams[key] = that.queryParams[key]; 
			}); 
	return (Object.keys(this.optionalParams).length);  
}; 

WFSMethodGetFeature.prototype.createRequest = function() {
	// http://jarpi.cartodb.com/api/v2/sql?q=SELECT+count(*)+FROM+distritos&api_key=bd6a0a7c3d64f870e375cd57489121e1fd9515e0 
	var httpRequest = "http://jarpi.cartodb.com/api/v2/sql?q="; 
	var oAuthKey = "bd6a0a7c3d64f870e375cd57489121e1fd9515e0"; 
	var mandatoryParamsArray = this.mandatoryParams.typename.split(":"); 
	var workSpace = mandatoryParamsArray.slice(0); 
	var tableName = mandatoryParamsArray.slice(1); 
	var sqlQuery = "SELECT+*+FROM+" + tableName; 
	if (this.optionalParams.resourceid !== undefined)
	{
		sqlQuery += "+WHERE+cartodb_id=" + this.optionalParams.resourceid; 
	}
	httpRequest += sqlQuery + "&api_key=" + oAuthKey;  
	return httpRequest; 
}; 

module.exports = WFSMethodGetFeature; 


