angular.module("customServiceApp", ["mathFactoryModule", "factorialServiceModule"])
.controller("mathCtrl", ["$scope", "$rootScope", "arthFactory", "factService", function(s, R, af, fs){
	s.a = 0;
	s.b = 0;
	s.result = 0;
	s.fresult = 0;
	s.sum = function(a, b){
		s.result = af.sum(a, b);
	};
	s.sub = function(a, b){
		s.result = af.sub(a, b);
	};
	s.mul = function(a, b){
		s.result = af.mul(a, b);
	};
	s.div = function(a, b){
		s.result = af.div(a, b);
	};
	s.factorial = function(a){
		s.fresult = fs.factorial(a);
	};
}]);