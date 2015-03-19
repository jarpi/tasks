var WFSMethod = require('./WFSMethod.js'); 

function WFSMethodGetFeature(queryParams) 
{ 
	WFSMethod.call(this, queryParams); 
	this.mandatoryParams = ['request', 'typename']; 
	this.optionalParams = ['testOptional', 'testOptional2']; 
}; 

WFSMethodGetFeature.prototype = Object.create(WFSMethod.prototype); 
WFSMethodGetFeature.prototype.constructor = WFSMethodGetFeature;  

WFSMethod.prototype.checkMandatoryParams = function() { 
	var that = this; 
	var iOkParamsCount = this.mandatoryParams.forEach( 
			function(key){ 
				console.log(that.queryParams[key]); 
				if (!key in that.queryParams && that.queryParams[key] === undefined) 
					return -1; 
				iOkParamsCount += 1; 
			}); 
	console.log((iOkParamsCount)); 
	return (iOkParamsCount == this.mandatoryParams.length);  
}; 

// WFSMethodGetFeature.prototype.showValue = function() { 
// 	console.log(this.testValue + " CHILD CLASS GETFEATURE");  
// };  

module.exports = WFSMethodGetFeature; 