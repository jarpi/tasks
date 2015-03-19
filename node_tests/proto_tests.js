function foo() {
	this.a = 5; 
}
foo.prototype.m = function () {console.log("FOO class " + this.a);}; 

function bar() {
	foo.call(this); 
	this.a = 10; 
} 

bar.prototype = Object.create(foo.prototype); 
bar.prototype.constructor = bar; 
bar.prototype.m = function() {console.log("BAR CLASS " + this.a);}; 

f = new foo(); 
b = new bar(); 

f.m(); 
b.m(); 
b.m = function() {console.log("Object modified property");}; 

