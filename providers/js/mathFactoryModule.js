angular.module("mathFactoryModule", [])
.factory("arthFactory", function(){
	var arth = {};
	arth.sum = function(a, b){
		return a + b;
	};
	arth.sub = function(a, b){
		return a - b;
	};
	arth.mul = function(a, b){
		return a * b;
	};
	arth.div = function(a, b){
		return a / b;
	};
	return arth;
})