angular.module("serviceApp", [
						"factoryServiceModule",
						"serviceModule",
						"providerModule"])
.config(["squareProvider", function(squareProvider){
	squareProvider.setValue(7);
}])
.controller("mathCtrl", [
							"$scope",
							"mathService",
							"factorialService",
							"square",
		function($scope, mathService, factorialService, square){
	$scope.math = {
		a:0,
		b:0
	};
	$scope.result = 0;
	$scope.sum = function(math){
		$scope.result = mathService.sum(math.a, math.b);
	};
	$scope.sub = function(math){
		$scope.result = mathService.sub(math.a, math.b);
	};
	$scope.mul = function(math){
		$scope.result = mathService.mul(math.a, math.b);
	};
	$scope.div = function(math){
		$scope.result = mathService.div(math.a, math.b);
	};
	$scope.factorial = function(){
		$scope.result = factorialService.factorial($scope.math.a);
	};
	$scope.square = function(){
		$scope.result = square.doSquare($scope.math.b);
	};
}]);