angular.module('app', [
    'ngRoute',
    'app.UserController',
    'app.UserService',
    'app.LoginController',
    'app.LoginService'
])

.config(['$routeProvider', function($routeProvider) {
   $routeProvider
        .when('/home', {
            templateUrl: '/partials/home.html',
        })

        .when('/user', {
            templateUrl: '/partials/user.html',
            controller: 'UserController'
        })

        .when('/contact', {
            templateUrl: '/partials/contact.html'
        })

        .otherwise ({ redirectTo: '/home' });

}]);