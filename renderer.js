var fs = require('fs');

function view(templateName, values, response){
	//read from template file
	var fileContents = fs.readFileSync('./views/'+templateName+'.html')
  		

	response.write(fileContents);
}

module.exports.view = view;