app.controller('RootCtrl',
	['$scope','$location',
	function($scope,$location){
    //$scope.title = "Home Page";
	$scope.values = [{
		id: 1,
		label: 'aLabel',
		subItem: { name: 'aSubItem' }
	}, {
		id: 2,
		label: 'bLabel',
		subItem: { name: 'bSubItem' }
	}];
	$scope.selected = { name: 'aSubItem' };
	$scope.login={
		uid: "ENTER EMAIL ID",
		pwd: "ENTER PWD"
	};
	$scope.validate=function(){
		alert("login success");
		$location.path("/about");
	};
}]);