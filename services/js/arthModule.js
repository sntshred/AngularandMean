angular.module("arthModule", [])
.service("arthService", function(){
	this.add = function(a, b){
		return a + b;
	};
	this.mul = function(a, b){
		return a * b;
	};
	this.sub = function(a, b){
		return a - b;
	};
	this.div = function(a, b){
		return a / b;
	};
});