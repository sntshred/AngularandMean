angular.module("serviceModule", [])
.service("factorialService", [function(){
	this.factorial = function(a){
		var result = 1;
		if(a === 0)
			return result;
		else{
			for(var i=a;i>=1;i--){
				result = result*i;
			}
			return result;
		}
	};
}]);