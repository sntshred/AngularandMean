(function(){
	'use strict';
	angular.module("todoApp")
	.factory("todoDataService", todoDataService);

	//data service to store todo data
	function todoDataService(){
		var todoListData = [];
		var todoData1 = {};
		todoData1.listName = 'list1';
		todoData1.listElements = [];
		todoData1.listElements.push({'id':1, 'name':'todol11', 'description':'abc'});
		todoData1.listElements.push({'id':2, 'name':'todol12', 'description':'abc1'});
		todoData1.listElements.push({'id':3, 'name':'todol13', 'description':'abc2'});
		todoListData.push(todoData1);
		var todoData2 = {};
		todoData2.listName = 'list2';
		todoData2.listElements = [];
		todoData2.listElements.push({'id':1, 'name':'todol21', 'description':'abc'});
		todoData2.listElements.push({'id':2, 'name':'todol22', 'description':'abc1'});
		todoData2.listElements.push({'id':3, 'name':'todol23', 'description':'abc2'});
		todoListData.push(todoData2);
		return{
			todoData : todoListData
		}
	};
})();