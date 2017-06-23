angular.module("providerModule", [])
.provider("square", [function(){
	this.a = 0;
	this.$get = function(){
		var myService = {};
		var a = this.a;
		myService.doSquare = function(){
			return a*a;
		};
		return myService;
	};
	
	this.setValue = function(a){
		this.a = a;
	};
}]);