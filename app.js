
var fs = require('fs');

var filename = 'data.json';

var file_content = fs.readFileSync(filename);
var content = JSON.parse(file_content);

//change the value in the in-memory object
content.object.value++;
//Serialize as JSON and Write it to a file
fs.writeFileSync(filename, JSON.stringify(content));