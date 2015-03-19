var WFSMethod = require('./WFSMethod.js'); 
	
function WFSMethodGetFeature(methodName) 
{ 
	WFSMethod.call(this, methodName); 
	this.testValue = 'Test value B'; 
}; 

WFSMethodGetFeature.prototype = Object.create(WFSMethod.prototype); 
WFSMethodGetFeature.prototype.constructor = WFSMethodGetFeature;  

WFSMethodGetFeature.prototype.showValue = function() { 
	console.log(this.testValue + " CHILD CLASS GETFEATURE");  
}; 

WFSMethodGetFeature.newFunc = function() {};  

module.exports = WFSMethodGetFeature; 