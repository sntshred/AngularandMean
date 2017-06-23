angular.module("myApp", ["factorialModule", "arthModule", "squareModule"])
.config(["squareServiceProvider", function(squareServiceProvider){
	squareServiceProvider.setValue(7);
}])
.controller("factorialCtrl",["$scope", "factorialService", "arthService", "squareService",
	function($scope, factorialService, arthService, squareService){
	$scope.a = 0;
	$scope.b = 0;
	$scope.resultType = "MATH OPERATION";
	$scope.arthResult = 0;
	$scope.getSquare = 0;
	$scope.getFactorial = function(){
		$scope.result = factorialService.factorial($scope.a);
	};
	$scope.getSum = function(){
		$scope.resultType = "SUM";
		$scope.arthResult = arthService.add($scope.a, $scope.b);
	};
	$scope.getSub = function(){
		$scope.resultType = "SUBSTRACTION";
		$scope.arthResult = arthService.sub($scope.a, $scope.b);
	};
	$scope.getMul = function(){
		$scope.resultType = "MULTIPLICATION";
		$scope.arthResult = arthService.mul($scope.a, $scope.b);
	};
	$scope.getDiv = function(){
		$scope.resultType = "DIVISION";
		$scope.arthResult = arthService.div($scope.a, $scope.b);
	};
	$scope.getSquare = function(b){
		$scope.sResult = squareService.square();
	};
}]);