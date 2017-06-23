var app = angular.module('spa', ['ngRoute']);

app.factory('getEmployeeFac',function($http){
	//alert("factory registered");
	var employees={};
	return{
		getEmployees:function(empUrl){
			return $http({
				method: "jsonp",
				url: empUrl
			})		
		}
	}
});

app.controller('empAddCont', ['$scope', function($scope){
    $scope.title = "ADD EMPLOYEE";
}]);

app.controller('empDeleteCont', ['$scope', function($scope){
    $scope.title = "DELETE EMPLOYEE";
}]);
app.controller('empUpdateCont', ['$scope', function($scope){
    $scope.title = "UPDATE EMPLOYEE";
}]);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
			controller : 'empAddCont',
            template : '<h1>DASH BOARD</h1>'            
        })
        .when('/emp', {
            controller : 'empListCont',
            templateUrl: "views/user-list.htm"			
        })
		.when('/payroll', {
            controller : 'empDeleteCont',
            template : '<h1>PAYROLL</h1>'
        })
		.when('/projects', {
            controller : 'empDeleteCont',
            template : '<h1>PROJECTS</h1>'
        })
		.when('/assessment', {
            controller : 'empDeleteCont',
            template : '<h1>ASSESSMENTS</h1>'
        })
		.otherwise({
            redirectTo : '/'
        });
}]);