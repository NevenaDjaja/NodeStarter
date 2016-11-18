var express = require('express');
var app = express();
var PORT = 3000;

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req,res) {
//   res.send('Hello Express');
// });

app.listen(PORT, function() {
  console.log('Server started on port:', PORT);
});
