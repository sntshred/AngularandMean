angular.module("customServiceApp")
//inline array annotation dependency injection
.controller("arthCtrl",
	[
		"$scope", 
		"mathService",
		"factorialService", 
		"squareService", 
		function($scope, mathService, factorialService, squareService){
	$scope.math = {
		a : 0,
		b : 0
	};
	$scope.result = 0;
	$scope.sum = function(math){
		$scope.result = mathService.add(math);//math.a + math.b;
	};
	$scope.sub = function(math){
		$scope.result = mathService.substraction(math);//math.a - math.b;
	};
	$scope.mul = function(math){
		$scope.result = mathService.multiplication(math);//math.a * math.b;
	};
	$scope.div = function(math){
		$scope.result = mathService.divide(math);//math.a / math.b;
	};
	$scope.factorial = function(a){
		$scope.fresult = factorialService.factorial(a);
	};
	$scope.square = function(b){
		$scope.sresult = squareService.square(b);
	};
}]);