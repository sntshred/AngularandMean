angular.module("myFactoryModule",[])
.factory("mathFac", function(){
	var mathFac = {};
	mathFac.add = function(math){
		return math.a + math.b;
	};
	mathFac.sub = function(math){
		return math.a - math.b;
	};
	mathFac.mul = function(math){
		return math.a * math.b;
	};
	mathFac.div = function(math){
		return math.a / math.b;
	};
	return mathFac;
})