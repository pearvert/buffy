var xlsx_api = require('xls_to_json_api');
var express = require('express');
var serveIndex = require('serve-index');
var app = express();

app.use(express.static('./'));

app.get('/express', function (req, res) {
  res.send('Hello World!');
});

var sheets = [
  "andrew",
  "angel",
  "anya",
  "buffy",
  "cordelia",
  "dawn",
  "demons",
  "drusilla",
  "faith",
  "giles",
  "human",
  "jonathan",
  "Oz",
  "riley",
  "spike",
  "vampires",
  "willow",
  "xander",
  "potentials",
  "allSlayers",
  "totals"
];

xlsx_api(app, {
  sheets: sheets,
  xlsxSource: 'deathDatasets.xlsx',
  dataDir: __dirname+'/data'
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Service listening at http://%s:%s', host, port);
});
