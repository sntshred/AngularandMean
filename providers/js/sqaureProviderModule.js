angular.module("sqaureProviderModule", [])
.provider("squareService", function(){
	this.a = 0;
	this.$get = function(){
		var squareService = {};
		var a = this.a;
		squareService.square = function(){
			return a * a;
		};
		return squareService;
	};
	
	this.setValue = function(a){
		this.a = a;
	};
});