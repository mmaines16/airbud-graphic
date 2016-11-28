var express = require('Express');
var server = express();

server.use(express.static('public'));

server.get('/', function(req, res) {
  res.sendfile("template.html");
});


console.log("Server running on port 3000");
server.listen(3000);
