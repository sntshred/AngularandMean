angular.module("providerModule",[])
.provider("factorial", function(){
	var a;
	this.$get = function(){
		return {
			fact : function(){
				var result = 1;
				if(a == 0)
					result = 1;
				else{
					for(var i = 1; i<=a; i++){
						result = result*i;
					}
				}
				return result;
			}
		};
	};
	
	this.set = function(a1){
		a = a1;
	};
});