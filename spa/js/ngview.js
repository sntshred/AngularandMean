var app = angular.module('ngViewExampleApp',
					['ngRoute']);

app.config(['$routeProvider',
	function($routeProvider){
    $routeProvider
        .when('/', {
            controller : 'RootCtrl',
            //template : '<h1>{{title}}</h1>'
			templateUrl: "app.html"
        })
        .when('/about', {
            controller : 'AboutCtrl',
            template : '<h1>{{title}}</h1>'
        })
		.when('/services', {
            controller : 'ServicesCtrl',
            template : '<h1>{{title}}</h1>'
        })
		.when('/contact', {
            controller : 'ContactCtrl',
            template : '<h1>{{title}}</h1>'
        })
        .otherwise({
            redirectTo : '/'
        });
}]);