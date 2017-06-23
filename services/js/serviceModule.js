angular.module("serviceModule", ["factoryModule"])
.service("mathService", function(mathFactory){
	this.add = function(a, b){
		return mathFactory.sum(a, b);
	};
	this.min = function(a, b){
		return mathFactory.sub(a, b);
	};
	this.mul = function(a, b){
		return mathFactory.mul(a, b);
	};
	this.div = function(a, b){
		return mathFactory.div(a, b);
	};
});