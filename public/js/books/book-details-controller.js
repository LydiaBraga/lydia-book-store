angular.module('app.BookDetailsController',[])

.controller('BookDetailsController', function ($rootScope, $scope, $routeParams, BooksService) {

    $scope.book = {};

    var getBookById = function() {
        BooksService.getBookById($routeParams.id).then(response => {
            $scope.book = response.data;
        }, response => {
            $scope.book = {};
        });    
    }

    getBookById();

});