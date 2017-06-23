(function(){
	angular.module("todoApp")
	.factory("todoTransactionService", todoTransactionService);

	todoTransactionService.$inject = ["todoDataService", "utilsService"];
	
	function todoTransactionService(todoDataService, utilsService){
		var service = {};
		service.createTodo = createTodo;
		service.updateTodo = updateTodo;
		service.deleteTodo = deleteTodo;
		
		function createTodo(listName, todo){
			var currentTodo ={
				'id' : 0,
				'name' : '',
				'description' : ''
			};
			currentTodo.id = getId(listName);
			currentTodo.name = todo.name;
			currentTodo.description = todo.description;
			var index = utilsService.getIndex(todoDataService.todoData, 'listName', listName);
			console.log("current todo object for insert : ", currentTodo);
			todoDataService.todoData[index].listElements.push(currentTodo);
			return true;
		};
		function updateTodo(listName, todo){
			var listIndex = utilsService.getIndex(todoDataService.todoData, 'listName', listName);
			console.log("list index : ", listIndex);
			var todoIndex = utilsService.getIndex(todoDataService.todoData[listIndex].listElements, 'id', todo.id);
			console.log("todo index : ", todoIndex);
			todoDataService.todoData[listIndex].listElements[todoIndex].name = todo.name;
			todoDataService.todoData[listIndex].listElements[todoIndex].description = todo.description;
			return true;
		};
		function deleteTodo(listName, todo){
			var listIndex = utilsService.getIndex(todoDataService.todoData, 'listName', listName);
			var todoIndex = utilsService.getIndex(todoDataService.todoData[listIndex].listElements, 'id', todo.id);
			todoDataService.todoData[listIndex].listElements.splice(todoIndex, 1);
			return true;
		};
		function getId(listName) {
			var max;
			var listIndex = utilsService.getIndex(todoDataService.todoData, 'listName', listName);
			var array = todoDataService.todoData[listIndex].listElements;
			for (var i=0 ; i<array.length ; i++) {
				if (!max || parseInt(array[i]['id']) > parseInt(max))
					max = array[i].id;
			}
			return parseInt(max) + 1;
		}
		return service;
	};
})();