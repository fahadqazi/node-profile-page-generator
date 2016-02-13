//Problem:
//Solution: 
var router = require('./router.js');

//1. create webserver
var http = require('http');
http.createServer(function(request,response){
	router.home(request,response);
	router.user(request,response);
}).listen(8888);

console.log("server is running");

//2. Handle http route GET and POST


