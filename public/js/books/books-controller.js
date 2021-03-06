angular.module('app.BooksController',[])

.controller('BooksController', function ($rootScope, $scope, $routeParams, BooksService) {
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

    var searchBooks = function() {
        if ($routeParams.gender) {
            BooksService.getBooksByGender($routeParams.gender).then(response => {
                $rootScope.books = response.data;
            }, response => {
                $rootScope.books = [];
            });
        } else if ($routeParams.searchValue) {
             BooksService.searchBooks($routeParams.searchValue).then(response => {
                $rootScope.books = response.data;
            }, response => {
                $rootScope.books = [];
            });
        } else {
            getBooks();
        }
    }

    $scope.goToShoppingCart = function(bookId) {
        BooksService.saveBookInLocalStorage(bookId);
        window.location.href = "#!/purchases";
    }

    getBooks();
    getGenders();
    searchBooks();
});