angular.module("factoryServiceModule", [])
.factory("mathService", [function(){
	
	var myFactory = {};
	
	myFactory.sum = function(a, b){
		return a+b;
	};
	
	myFactory.sub = function(a, b){
		return a-b;
	};
	
	myFactory.mul = function(a, b){
		return a*b;
	};
	
	myFactory.div = function(a, b){
		return a/b;
	};
	
	return myFactory;
}]);