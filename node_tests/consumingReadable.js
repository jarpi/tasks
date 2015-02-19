process.stdin.on('readable', function(){
	var buf = process.stdin.read();  
	if (buf == null) process.exit(); 
	for (i=0;i<buf.length-1;i++)
		console.log(String.fromCharCode(buf[i])); 
}); 


