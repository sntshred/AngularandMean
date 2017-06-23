angular.module("myFactoryModule", [])
.factory("mathFactory", function(){
	var mathFactory = {};
	
	mathFactory.sum = function(math){
		return math.a + math.b;
	};

	mathFactory.sub = function(math){
		return math.a - math.b;
	};

	mathFactory.mul = function(math){
		return math.a * math.b;
	};

	mathFactory.div = function(math){
		return math.a / math.b;
	};

	return mathFactory;
});