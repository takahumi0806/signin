var express = require('express');
var app = express();

var server = app.listen(3000, function () {
  console.log('Node.js is listening to PORT:' + server.address().port);
});

app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
  res.render('index', {});
});
app.get('/signin', function (req, res, next) {
  res.render('signin', {});
});
