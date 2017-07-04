angular.module('app', [
    'ngRoute',
    'app.UserController',
    'app.UserService',
    'app.LoginController',
    'app.LoginService'
])

.config(['$routeProvider', function($routeProvider) {
   $routeProvider
        .when('/user', {
            templateUrl: '/partials/user.html',
            controller: 'UserController'
        })

        .when('/login', {
            templateUrl: '/partials/login.html',
            controller: 'UserController'
        })

        .when('/contact', {
            templateUrl: '/partials/contact.html'
        })

        .otherwise ({ redirectTo: '/user' });

}]);