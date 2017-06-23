angular.module("myFacotryModule",[])
.factory("myFac", function(){
	alert("myFac is loading...");
	return {
		sum : function(a, b){
			return a + b;
		}
	};
});