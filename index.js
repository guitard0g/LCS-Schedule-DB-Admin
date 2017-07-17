var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

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
		partial: "test"
	});
});

app.post('/testPost', function(request, response) {
	console.log(request.name_field);
	console.log(request.team_name);
	db.test();
});	

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


