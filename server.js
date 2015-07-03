var express = require('express');
var serveIndex = require('serve-index');
var app = express();

app.use(express.static('./'));
app.use('/', serveIndex('./'));

app.get('/express', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});