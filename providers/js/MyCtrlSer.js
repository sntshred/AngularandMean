angular.module('SerCtrl', [])
.controller('MyCtrlSer',
			function($scope,
					CalcService) {
	$scope.sv=CalcService.calc(3,7);
});