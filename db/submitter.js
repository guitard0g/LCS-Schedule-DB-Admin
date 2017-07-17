// submitter.js
console.log('------------ HELLO -------------------------');

var getName = function(){
	return '------------ HELLO -------------------------';
}

var test = function(){
	console.log(getName());
}

exports.test = test;
