angular.module("factorilaServiceModule", [])
.service("factorialService", function(){
	this.factorial = function(a){
		var result = 1;
		if(a == 0)
			return result;
		else{
			for(var i=a; i>0; i--){
				result *= i;
			}
		}
		return result;
	};
});