angular.module('app', [
    'googlechart',
    'ngRoute',
    'app.UserController',
    'app.UserService',
    'app.LoginController',
    'app.LoginService',
    'app.BooksService',
    'app.BooksController',
    'app.BookDetailsController',
    'app.PurchaseService',
    'app.PurchaseController',
    'app.PieChartController',
    'app.TrackOrderController'    
])

.config(['$routeProvider', function($routeProvider) {
   $routeProvider
        .when('/home', {
            templateUrl: '/partials/home.html',
            controller: 'BooksController'
        })

        .when('/home/books/search/gender/:gender', {
            templateUrl: '/partials/home.html',
            controller: 'BooksController'
        })

        .when('/home/books/search/all/:searchValue', {
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

        .when('/book-details/:id', {
            templateUrl: '/partials/bookDetails.html',
            controller: 'BookDetailsController'
        })

        .when('/purchaseWarning', {
            templateUrl: '/partials/purchaseWarning.html',
            controller: 'LoginController'
        })

        .when('/purchases/', {
            templateUrl: '/partials/shoppingCart.html',
            controller: 'PurchaseController'
        })

        .when("/trackOrders", {
            templateUrl: '/partials/trackOrder.html',
            controller: 'TrackOrderController'
        })

        .when('/bestSellers', {
            templateUrl: '/partials/purchasePieChart.html',
            controller: 'PieChartController'
        })

        .when('/contact', {
            templateUrl: '/partials/contact.html'
        })

        .otherwise ({ redirectTo: '/home' });

}]);
