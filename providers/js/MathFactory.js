angular.module('FacService', [])
.factory('MathFactory', function() {
   
    return{
        multiply: function(a, b) {
            return a * b
        }
    };
    
});