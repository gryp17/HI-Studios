/**
 * Home controller
 */
app.controller("homeController", function ($rootScope, $scope) {
    
	//get the message from the lang controller variable (text)
	$scope.message = $rootScope.text.message;
	
});