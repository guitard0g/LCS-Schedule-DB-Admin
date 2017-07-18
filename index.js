var express = require('express');
var bodyParser = require('body-parser');
var admin = require("firebase-admin");
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

// database variables
var dbController = require('./db/submitter');
var serviceAccount = require("./db/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lcs-schedule-extension.firebaseio.com"
});
var db = admin.database();


app.get('/', (request, response) => {
  response.render('pages/index', {
		partial: "test",
	});
});

app.post('/testPost', (request, response) => {
	console.log(request.body.name_field);
	dbController.test();
	response.redirect('/');
});	

app.post('/addByRegion', (request, response) => {
	dbController.testAdd(db, request.body);
	response.redirect('/');
});	

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});


