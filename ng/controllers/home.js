/**
 * Home controller
 */
app.controller("homeController", function ($rootScope, $scope) {
    
	//watch for changes to the text variable and
	//get the message from the lang controller variable (text)
	$rootScope.$watch('text', function () {
		$scope.message = $rootScope.text.message;
		console.log("reloading text");
	}, true);

	
	
});