angular.module("myServiceModule", [])
.service("mpnService", function(){
	this.mpn = function(m, n){
		var result = m;
		for(var i=2;i<=n;i++){
			result = result * m;
		}
		return result;
	};
});