angular.module("factorialServiceModule",[])
.service("factService", function(){
	this.factorial = function(a){
		if(a === 0)
			return 1;
		else{
			var result = 1;
			for(var i=a; i>0; i--){
				result = result * i;
			}
			return result;
		}
	};
});