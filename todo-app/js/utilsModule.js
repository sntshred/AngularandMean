angular.module('utilityModule', [])
.factory('utilsService', utilsService);

function utilsService(){
	function getIndex(arr, key, value){
		for (var i = 0; i < arr.length; i++) {
			if (arr[i][key] == value) {
				return i;
			}
		}
		return -1;
	};
	return {
		getIndex : getIndex
	}
}