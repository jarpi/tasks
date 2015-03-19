function WFSMethod(methodName) {
	this.methodName = methodName; 
	this.testValue = 'Test value A'; 
};  

WFSMethod.prototype.checkRequestParam = function() {
	return "{'error':'Not implemented'}"; 
}; 

WFSMethod.prototype.execMethod = function() {
	return "{'error':'Not implemented'}"; 
}; 

WFSMethod.prototype.runQuery = function(url) {
	return "{'error':'Not implemented'}"; 
}; 

WFSMethod.prototype.showValue = function() {
	console.log(this.testValue + " SUPERCLASS WFSMETHOD"); 
}; 

module.exports = WFSMethod; 