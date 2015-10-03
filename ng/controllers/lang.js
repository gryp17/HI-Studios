/**
 * Language controller used to load all translations
 */
app.controller("langController", function($rootScope, $scope, $http) {

	$rootScope.language = 'en';
	$rootScope.text = {};
	$scope.doneLoadingLanguage = false;

	$http({
		method: 'GET',
		url: 'backend/lang/'+$rootScope.language+'.json'
	}).then(function successCallback(response) {
		$rootScope.text = response.data;
		$scope.doneLoadingLanguage = true;
		
	}, function errorCallback(response) {
		console.log(response);
	});
	

});