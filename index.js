var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// database submitters
var db = require('./db/submitter');
db.test();

app.get('/', function(request, response) {
  response.render('pages/index', {
		partial: "test",
		testData: null
	});
});

app.post('/testPost', function(request, response) {
	console.log(request.body.name_field);
	db.test();
	response.json({ testData: "HENLOOOOOOO" });
	response.render('/', {
		partial: "test",
		testData: "lol is this gunna work"
	});
});	

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


