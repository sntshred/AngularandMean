(function(){
	'use strict';
	angular.module("todoApp")
	.controller("viewController", viewController);

	viewController.$inject = ["$scope", "todoData", "$state", "todoDataService", "utilsService"];

	//viewController to handle view page functionality
	function viewController($scope, todoData, $state, todoDataService, utilsService){
		var vm = this;
		vm.todosList = todoData.data;
		vm.newListName = "";
		vm.selectedTodo = {};
		vm.selectedIndex = -1;
		console.log(vm.todosList);
		vm.selectTodo = selectTodo;
		vm.viewTodo = viewTodo;
		vm.add = create;
		
		function create(){
			var newTodoList = {};
			newTodoList.listName = vm.newListName;
			newTodoList.listElements = [];
			todoDataService.todoData.push(newTodoList);
			vm.newListName = "";
		};
		
		function selectTodo(todos){
			console.log('view operation in progress for id : ',todos.listName);
			var index = utilsService.getIndex(todoData.data, 'listName', todos.listName);
			console.log("get index : ", index);
			viewTodo(todos, index);
		};
		
		function viewTodo(todos, index){
			if(index >= 0){
				var inputParams = todos;
				inputParams.selectedIndex = index;
				$state.go("todo-form", inputParams);
			}
			else
				alert("please selected any todo list..");
		};
	};
})();