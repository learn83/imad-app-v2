var express = require('express'); //library for making html connections possible and for creating web serve 
var morgan = require('morgan');  //for obtaining log info
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleOne',function(req,res) {
    res.send("Article one will be published here!");
});

app.get('/articleTwo',function(req,res) {
    res.send("Article two will be published here!");
});

app.get('/articleThree',function(req,res) {
    res.send("Article three  will be published here!");
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
