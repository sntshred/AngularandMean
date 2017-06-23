angular.module("squareModule", [])
.provider("squareService", function(){
	var a = 0;
	this.$get = function(){
		return {
			square : function(){
				return a * a;
			},
			qube : function(){
				return a * a * a;
			}
		};
	};
	
	this.setValue = function(a1){
		a = a1;
	};
});