var http = require("http");

var server = http.createServer(function(req, res){
	console.log("HANDLING REQUEST..");
	res.end("Hello World..!");
});

server.listen(7000);

console.log("SERVER IS RUNNING ON http://127.0.0.1:7000");