function WFSMethod(queryParams) {
	this.mandatoryParams = []; 
	this.optionalParams = []; 
	this.queryParams = queryParams; 
};  

WFSMethod.prototype.checkMandatoryParams = function() { 
	throw error("Not implemented"); 
}; 

// WFSMethod.prototype.checkParams = function() {

// }; 

// WFSMethod.prototype.parseParams = function(queryParams) { 
// 	// Object.keys(queryParams).forEach( 
// 	// 		function(key,index){
// 	// 			paramsString += 
// 	// 			key + 
// 	// 			"=" + 
// 	// 			queryParams[key] + 
// 	// 			(index<Object.keys(queryParams).length-1 ? "&" : ""); 
// 	// 		}); 
// }; 

// WFSMethod.prototype.showValue = function() {
// 	console.log(this.testValue + " SUPERCLASS WFSMETHOD"); 
// }; 

module.exports = WFSMethod; 




