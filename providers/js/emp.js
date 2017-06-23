app.controller('empListCont', [ '$scope',
								'getEmployeeFac',
								function($scope,getEmployeeFac){
	$scope.nemp = {
		emp : '',
		fn : '',
		ln : '',
		salary : 0.00,
		edit : true,
		delete : true,
		error : false,
		incomplete : false
	};
	$scope.loadEmployees = function(){
		var empUrl = "http://localhost:8888/mysql-db/servlet/AllEmployees?callback=JSON_CALLBACK";
		getEmployeeFac.getEmployees(empUrl)
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
	}
	$scope.newEmployee = function(){
		$scope.nemp.edit = true;
		$scope.nemp.delete = true;
		$scope.nemp.eid = '';
        $scope.nemp.fn = '';
        $scope.nemp.ln = '';
		$scope.nemp.sal = '';
	}
	$scope.editEmployee = function(rowId){
		//alert("hear employee edit goes for rowId: "+rowId);
		$scope.nemp.edit = false;
		$scope.nemp.delete = true;
		$scope.nemp.incomplete = false;
		$scope.nemp.error = false;
		$scope.nemp.eid = $scope.employees[rowId-1].empId;
        $scope.nemp.fn = $scope.employees[rowId-1].firstName;
        $scope.nemp.ln = $scope.employees[rowId-1].lastName;
		$scope.nemp.sal = $scope.employees[rowId-1].salary;
	};
	$scope.deleteEmployee = function(rowId){
		//alert("hear employee delete goes: "+rowId);
		$scope.nemp.edit = false;
        $scope.nemp.delete = false;
        $scope.nemp.eid = $scope.employees[rowId-1].empId;
        $scope.nemp.fn = $scope.employees[rowId-1].firstName;
        $scope.nemp.ln = $scope.employees[rowId-1].lastName;
		$scope.nemp.sal = $scope.employees[rowId-1].salary;
	}
	$scope.save = function(){
		var id=$scope.nemp.eid;
        var fn=$scope.nemp.fn;
        var ln=$scope.nemp.ln;
		var sal=$scope.nemp.sal;
		var empUrl = "http://localhost:8888/mysql-db/servlet/";
		if(id.length != 0){
			empUrl = empUrl + "UpdateEmployee?"+
					"id="+id+"&fn="+fn+
					"&ln="+ln+"&sal="+sal+
					"&callback=JSON_CALLBACK";
		}
		else{
			empUrl = empUrl + "AddEmployee?"+
					"fn="+fn+
					"&ln="+ln+"&sal="+sal+
					"&callback=JSON_CALLBACK";
		}
		alert(empUrl);
		getEmployeeFac.getEmployees(empUrl)
		.success(function(res) {
			//alert('Yahoo!!!! We got the Response back')
			alert(JSON.stringify(res));
			$scope.loadEmployees();
			//$scope.employees=res;
			//alert($scope.employees);
		})
		.error(function(e , msg){
			alert(msg);
			//$scope.employees=msg;
		});
		//alert(JSON.stringify($scope.employees));		
	};
	$scope.delete = function() {
		var id=$scope.nemp.eid;
        var empUrl = "http://localhost:8888/mysql-db/servlet/"+
						"DeleteEmployee?id="+id+
					"&callback=JSON_CALLBACK";
		alert(empUrl);
		getEmployeeFac.getEmployees(empUrl)
		.success(function(res) {
			//alert('Yahoo!!!! We got the Response back')
			alert(JSON.stringify(res));
			$scope.loadEmployees();
			//$scope.employees=res;
			//alert($scope.employees);
		})
		.error(function(e , msg){
			alert(msg);
			//$scope.employees=msg;
		});
	};
	$scope.init = function() {
		$scope.loadEmployees();
	};
	$scope.init();
}]);