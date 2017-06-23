var app = angular.module("app", []);

app.controller("SimpleCtrl",["$scope",function($scope){
    $scope.message = "Hello Angular JS";
}]);

app.factory("SimpleService", function(){

    var service = {
        getData: function(){
            return [{
                id: 1,
                name: "Naresh"
            },
			{
				id: 2,
				name: "IT"
			}];
        }

    };

    return service;
});