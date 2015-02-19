var Readable = require('stream').Readable; 

var rs = new Readable; 
for (i=0;i<100;i++) 
	rs.push(i.toString()); 
rs.push(null); 
console.dir(rs);  // Print object properties to see that pipesCount is established 
var a = rs.pipe(process.stdout); 
console.dir(rs);  

