angular.module('app.BooksController',[])

.controller('BooksController', function ($rootScope, $scope, BooksService) {
    $rootScope.books = [];
    $scope.genders = [];

    var getBooks = function() {
        BooksService.getBooks().then(response => {
            $rootScope.books = response.data;
        }, response => {
            $rootScope.books = [];
        });    
    }

    var getGenders = function() {
        BooksService.getGenders().then(response => {
            $scope.genders = response.data;
            $scope.genders.push('Todos');
        }, response => {
            $scope.genders = [];
        });    
    }

    $scope.filterByGender = function(gender) {
        BooksService.getBooksByGender(gender).then(response => {
            $rootScope.books = response.data;
        }, response => {
            $rootScope.books = [];
        })
    }

    getBooks();
    getGenders();
});