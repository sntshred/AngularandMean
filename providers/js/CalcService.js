angular.module('Service', [])
.service('CalcService', function(){
	this.calc = function(a, b) {
		return a * b;
	}
});