angular.module("myProviderModule", [])
.provider("factorial", function(){
	this.a = 0;
	this.$get = function(){
		var factorial = {};
		var a = this.a;
		factorial.doFactorial = function(){
			var result = 1;
			if(a === 0)
				return result;
			else{
				for(i=1;i<=a;i++){
					result = result * i;
				}
			}
			return result;
		};
		return factorial;
	};
	
	this.setValue = function(A){
		this.a = A;
	};
});