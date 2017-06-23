var myApp1=angular.module('myApp1', []);

myApp1.controller('myCtrl', ['$scope', function($scope){
	$scope.myApp1Model="MY APP1 DATA";
	
}]);

var myApp2=angular.module('myApp2', 
						[
							'aboutModule',
							'serviceModule',
							'contactModule'
						]);

angular.element(document).ready(function(){
	angular.bootstrap(document.getElementById("myApp2"),
					['myApp2']);
});
