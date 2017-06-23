angular.module('FacCtrl', [])
.controller('MyCtrlFac',
			function($scope, MathFactory) {
	$scope.fv= MathFactory.multiply(5,7);
});