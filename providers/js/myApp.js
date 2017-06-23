angular.module("myApp", ["myFactoryModule", "myServiceModule", "myProviderModule"])
.config(
	function(squareProvider){
		squareProvider.setAValue(23);
	}
)
.controller("mathCtrl", function($scope, mathFactory, factorialService, square){
	$scope.math = {
		a : 0,
		b : 0
	};
	$scope.result = 0;
	$scope.resultA = 0;
	$scope.resultB = 0;
	$scope.s = 0;
	$scope.sum = function(math){
		$scope.result = mathFactory.sum(math);
		$scope.resultA = factorialService.factorial(math.a);
		$scope.resultB = factorialService.factorial(math.b);
		$scope.s = square.square();
	};
	$scope.sub = function(math){
		$scope.result = mathFactory.sub(math);
		$scope.resultA = factorialService.factorial(math.a);
		$scope.resultB = factorialService.factorial(math.b);
		$scope.s = square.square();
	};
	$scope.mul = function(math){
		$scope.result = mathFactory.mul(math);
		$scope.resultA = factorialService.factorial(math.a);
		$scope.resultB = factorialService.factorial(math.b);
		$scope.s = square.square();
	};
	$scope.div = function(math){
		$scope.result = mathFactory.div(math);
		$scope.resultA = factorialService.factorial(math.a);
		$scope.resultB = factorialService.factorial(math.b);
		$scope.s = square.square();
	};
})