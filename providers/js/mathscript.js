var myApp = angular.module('myApp', 
                        [
                            'SqareSer',
                            'Service',
                            'FacService',
                            'FacCtrl',
                            'SerCtrl',
                            'ProCtrl'
                        ]);

angular.element(document).ready(function(){
    angular.bootstrap(document.getElementById("app"), 
                        ['myApp']);    
});


myApp.config(function(SqareProvider){
    SqareProvider.setValue(7);
});