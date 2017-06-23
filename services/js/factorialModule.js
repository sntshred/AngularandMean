angular.module("factorialModule", [])
.factory("factorialService", function(){
	return {
		factorial : function(a){
			var result = 1;
			if(a === 0)
				return result;
			else{
				for(var i=1; i<=a; i++){
					result = result * i;
				}
				return result;
			}
		}
	};
});