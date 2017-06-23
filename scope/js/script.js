angular.module('scopeExample', [])
.controller('GreetController', 
			['$scope', '$rootScope', 
			function($scope, $rootScope) {
	$scope.name = 'World';
	$rootScope.department = 'Angular';
}])
.controller('ListController', 
			['$scope', function($scope) {
	$scope.names = [
		'Naresh Student 1',
		'Naresh Student 2',
		'Naresh Student 3'
	];
}]);