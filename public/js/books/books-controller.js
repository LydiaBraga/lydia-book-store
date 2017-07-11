angular.module('app.BooksController',[])

.controller('BooksController', function ($rootScope, $scope, BooksService) {
    var getBooks = function() {
        BooksService.getBooks().then(response => {
            $scope.books = response.data;
        }, response => {
            $scope.books = [];
        });    
    }

    getBooks();
});