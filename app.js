//Problem:
//Solution: 

//1. create webserver
var http = require('http');
http.createServer(function(request,response){
	homeRoute(request,response);
}).listen(8888);

console.log("server is running");

//2. Handle http route GET and POST


function homeRoute(request,response){
	console.log(request.url);
	if(request.url === '/'){
		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("hello world");
		response.end();
	}else{
		response.end("Nothing here for you");
	}
}

//3. Handle http route GET /:username
function userRoute(request,response){

}