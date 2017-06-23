angular.module('SqareSer', [])
.provider('Sqare', function() {
    
    this.a = 0;
    
    this.$get = function() {
        var a = this.a;
        return {
            sqare: function() {
                return a * a;
            }
        }
    };
	
    this.setValue = function(a) {
        this.a = a;
    };	
});