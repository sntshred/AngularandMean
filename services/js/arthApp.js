angular.module("arthApp",["serviceModule", "providerModule"])
.config(function(factorialProvider){
	factorialProvider.set(5);
})
.controller("arthCtrl", function($scope, mathService, factorial){
	$scope.a = 0;
	$scope.b = 0;
	$scope.result = 0;
	$scope.fa = 0;
	$scope.fb = 0;
	$scope.add = function(a, b){
		$scope.result = mathService.add(a, b);
		$scope.fa = factorial.fact(a);
		$scope.fb = factorial.fact(b);
	};
	$scope.sub = function(a, b){
		$scope.result = mathService.min(a, b);
		$scope.fa = factorial.fact(a);
		$scope.fb = factorial.fact(b);
	};
	$scope.mul = function(a, b){
		$scope.result = mathService.mul(a, b);
		$scope.fa = factorial.fact(a);
		$scope.fb = factorial.fact(b);
	};
	$scope.div = function(a, b){
		$scope.result = mathService.div(a, b);
		$scope.fa = factorial.fact(a);
		$scope.fb = factorial.fact(b);
	};
});