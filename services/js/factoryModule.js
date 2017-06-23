angular.module("factoryModule", [])
.factory("mathFactory", function(){
	var mathFactory = {};
	mathFactory.sum = function(a, b){return a+b};
	mathFactory.sub = function(a, b){return a-b};
	mathFactory.mul = function(a, b){return a*b};
	mathFactory.div = function(a, b){return a/b};
	return mathFactory;
});