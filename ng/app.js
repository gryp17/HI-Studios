
var app = angular.module("hi-studios", ['ngRoute']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
                .when('/articles/:section_name', {
                    templateUrl: 'app/views/partials/articles.php',
                }).when('/archive', {
                    templateUrl: 'app/views/partials/archive.php',
                }).otherwise({
					templateUrl: 'templates/partials/home.php',
        });
}]);

