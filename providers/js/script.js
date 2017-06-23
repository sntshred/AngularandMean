var myApp = angular.module('myApp', []);
function sayHellow(){
}
//service style, probably the simplest one
myApp.service('helloWorldFromService', function() {
    this.sayHello = function() {
        return "Hello, World! FROM SERVICE"
    };
});

//factory style, more involved but more sophisticated
myApp.factory('helloWorldFromFactory', function() {
    return {
        sayHello: function() {
            return "Hello, World! FROM FACTORY"
        }
    };
});
    
//provider style, full blown, configurable version     
myApp.provider('helloWorld', function() {
    this.name = 'Default';
    this.$get = function() {
        var name = this.name;
        return {
            sayHello: function() {
                return "Hello, " + name + "! FROM PROVIDER"
            }
        }
    };
    this.setName = function(name) {
        this.name = name;
    };
});

//hey, we can configure a provider!            
myApp.config(function(helloWorldProvider){
    helloWorldProvider.setName('World');
});
        

myApp.controller('MyCtrl',function($scope,
									helloWorld,
									helloWorldFromFactory,
									helloWorldFromService) {
    $scope.hellos = [
        helloWorld.sayHello(),
        helloWorldFromFactory.sayHello(),
        helloWorldFromService.sayHello()
	];
});