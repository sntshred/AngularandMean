(function(){
	angular.module("todoApp")
	.controller("editController", editController);

	//editController to handle form page functionality
	editController.$inject = ["$scope", "$stateParams", "todoTransactionService", "$state"];

	function editController($scope, $stateParams, todoTransactionService, $state){
		var em = this;
		em.showList = true;
		em.showForm = false;
		em.edit = false;
		em.create = false;
		em.currentTodoList = $stateParams;
		em.currentTodo = {};
		em.editTodo = editTodo;
		em.newTodo = newTodo;
		em.createTodo = createTodo;
		em.updateTodo = updateTodo;
		em.deleteTodo = deleteTodo;
		em.back = back;
		em.showBack = showBack;
		em.transactionClassName = '';
		em.transactionStatus = '';
		em.transactionMessage = '';
		em.check = '';
		console.log(em.currentTodoList);
		
		function messageDefaults(operation){
			em.transactionClassName = '';
			em.transactionStatus = '';
			em.transactionMessage = '';
		};
		
		function newTodo(){
			messageDefaults();
			em.showList = false;
			em.showForm = true;
			em.create = true;
			em.edit = false;
			em.currentTodo = {};
		};
		
		function showBack(){
			em.showList = true;
			em.showForm = false;
			em.create = false;
			em.edit = true;
			em.filterText = "";
			em.check = "";
			em.currentTodo = {};
		};
		
		function editTodo(todo){
			messageDefaults();
			em.showList = false;
			em.showForm = true;
			em.create = false;
			em.edit = true;
			em.currentTodo = todo;
		};
		
		function createTodo(listName, currentTodo){
			var result = todoTransactionService.createTodo(listName, currentTodo);
			console.log("result : ", result);
			if(result){
				em.transactionClassName = 'alert alert-success';
				em.transactionStatus = 'Success..!';
				em.transactionMessage = 'TODO created successfully..';
				em.currentTodo = {};
				em.showBack();
			}
		};
		function updateTodo(listName, currentTodo){
			var result = todoTransactionService.updateTodo(listName, currentTodo);
			console.log("result : ", result);
			if(result){
				em.transactionClassName = 'alert alert-success';
				em.transactionStatus = 'Success..!';
				em.transactionMessage = 'TODO updated successfully..';
				em.currentTodo = {};
				em.showBack();
			}
		};
		
		function back(){
			$state.go("todo-view");
		};
		
		function deleteTodo(listName, currentTodo){
			var result = todoTransactionService.deleteTodo(listName, currentTodo);
			if(result){
				em.transactionClassName = 'alert alert-success';
				em.transactionStatus = 'Success..!';
				em.transactionMessage = 'TODO updated successfully..';
				em.currentTodo = {};
				em.showBack();
			}
		};
	};
})();