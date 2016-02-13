//. Handle http route GET and POST


function home(request,response){
	console.log(request.url);
	if(request.url === '/'){
		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("hello world");
		response.end();
	}else{
		response.end("Nothing here for you");
	}
}

//. Handle http route GET /:username
function user(request,response){
	var username = request.url.replace("/", "");
	if(username > 0){
		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write(username + "\n");
		response.end();
	}
}

module.exports.home = home;
module.exports.user = user;