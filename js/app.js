var app = angular.module('app', [
    'ngRoute',
    'hypeControllers'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/discography.html',
            controller: 'DiscographyController'
        })
        .when('/:release', {
            templateUrl: 'partials/discography.html',
            controller: 'DiscographyController'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
}]);
