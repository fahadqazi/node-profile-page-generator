//. Handle http route GET and POST
var Profile = require("./profile.js");
var renderer = require("./renderer.js");


function home(request,response){
	console.log(request.url);
	if(request.url === '/'){
		response.writeHead(200, {"Content-Type":"text/plain"});
		renderer.view("header", {}, response);
		renderer.view("search", {}, response);
		renderer.view("footer", {}, response);
		response.end();

		
	}
}

//. Handle http route GET /:username
function user(request,response){
	var username = request.url.replace("/", "");
	if(username.length > 0){
		response.writeHead(200, {"Content-Type":"text/plain"});
		renderer.view("header", {}, response);

		var studentProfile = new Profile(username);


		studentProfile.on("end", function(profileJSON){

			var values = {
				avatarUrl: profileJSON.gravatar_url,
				username: profileJSON.profile_name,
				badges: profileJSON.badges.length,
				javascriptPoints: profileJSON.points.JavaScript
			}
			//simple response
			renderer.view("profile", values, response);
			renderer.view("footer", {}, response);
			response.end();
			
		});

		studentProfile.on("error",function(error){
			renderer.view("error", {errorMessage: error.message}, response);
			renderer.view("search", {}, response);
			renderer.view("footer", {}, response);
			response.end();
			
		});

		

	}
}








module.exports.home = home;
module.exports.user = user;

