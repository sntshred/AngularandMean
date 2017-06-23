angular.module('ProCtrl', [])
.controller('MyCtrlPro',function($scope,
								Sqare) {
	$scope.pv=Sqare.sqare();
});