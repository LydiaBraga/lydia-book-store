angular.module('app', [
    'ngRoute',
    'app.UserController',
    'app.UserService',
    'app.LoginController',
    'app.LoginService',
    'app.BooksService',
    'app.BooksController',
    'app.GenderController'
])

.config(['$routeProvider', function($routeProvider) {
   $routeProvider
        .when('/home', {
            templateUrl: '/partials/home.html',
            controller: 'BooksController'
        })

        .when('/user', {
            templateUrl: '/partials/user.html',
            controller: 'UserController'
        })

        .when('/user/edit', {
            templateUrl: '/partials/user.html',
            controller: 'UserController'
        })

        .when('/contact', {
            templateUrl: '/partials/contact.html'
        })

        .otherwise ({ redirectTo: '/home' });

}]);