var app = angular.module('myApp',[]);
app.controller('MyCtrl',function($scope,
								getEmployeeServ){
	$scope.employees = [];
	getEmployeeServ.getEmployees()
	.success(function(res) {
		//alert('Yahoo!!!! We got the Response back')
		//alert(JSON.stringify(res));
		$scope.employees=res;
		//alert($scope.employees);
	})
	.error(function(e , msg){
		alert(msg);
		$scope.employees=msg;
	});
	//alert($scope.employees);
});
app.service('getEmployeeServ',function($http){
	var employees={};
	var empUrl = "http://localhost:8888/mysql-db/servlet/AllEmployees?callback=JSON_CALLBACK";
	this.getEmployees=function(){
		return $http({
			method: "jsonp",
			url: empUrl
		});
	};
})