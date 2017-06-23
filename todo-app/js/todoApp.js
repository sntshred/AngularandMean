(function(){
	'use strict';
	//register our todoApp module with angular and
	//inject dependency modules
	angular.module("todoApp", ['ui.router', 'utilityModule'])
	.config(appConfig)
	.run(init);

	//use dependency injecting using annotation
	//useful when minifying js files
	appConfig.$inject = ["$stateProvider"];
	init.$inject = ["$state"];
	
	//routing configuration to handle single page mechanisum
	function appConfig($stateProvider){
		$stateProvider
		.state("todo-view", {
			url : '/view',
			templateUrl : "partials/todo-view.htm",
			controller : "viewController",
			controllerAs : "vm",
			resolve : {
				todoData : ["todoDataService", function(todoDataService){
					return {
						'data' : todoDataService.todoData
					}
				}]
			}
		})
		.state("todo-form", {
			url : '/form',
			templateUrl : "partials/todo-form.htm",
			controller : "editController",
			controllerAs : "em",
			params : {
				listName : "",
				listElements : []
			}
		})
	};

	//starting our application to display home page
	function init($state){
		$state.go("todo-view");
	};
})();