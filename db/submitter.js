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

exports.test = test;
exports.testLog = testLog;
