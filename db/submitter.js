// submitter.js

var getName = function(){
	return '------------ HELLO -------------------------';
}

var test = function(){
	console.log(getName());
}
var testLog = function(body){
	console.log(body.day);	
	console.log(body.month);	
	console.log(body.year);	
	console.log(body.team1);	
	console.log(body.team2);	
};

var testAdd = (db, body) => {
	var ref = db.ref("/NA/matches");	
	var date = body.year + '-';
	if(body.month.length < 2)
		date = date + '0';
	date = date + body.month + '-';
	if(body.day.length < 2)
		date = date + '0';
	date = date + body.day;
	ref.set({
		[date]: {
  		matches: body.team1 +'-'+ body.team2 +'-'+ body.time +'-'+ body.victor
  	}
	});
};

exports.test = test;
exports.testLog = testLog;
exports.testAdd = testAdd;
