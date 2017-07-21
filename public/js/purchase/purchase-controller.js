angular.module('app.PurchaseController',[])

.controller('PurchaseController', function ($rootScope, $scope, $routeParams, LoginService, PurchaseService, BooksService) {

    var init = function() {
        $scope.user = LoginService.getLoginFromLocalStorage();

        if ($scope.user) {
            $scope.purchase = PurchaseService.getPurchaseFromLocalStorage();

            if ($routeParams.bookId) {
                if (!$scope.purchase) {
                    var books = [];
                    books.push
                    $scope.purchase = {
                        user: $scope.user.id,
                        books: [$routeParams.bookId]
                    }

                    PurchaseService.savePurchaseInLocalStorage($scope.purchase);
                } else {
                    $scope.purchase.books.push($routeParams.bookId);
                    PurchaseService.savePurchaseInLocalStorage($scope.purchase);
                }
            }
        } else {
            window.alert("Faça login para realizar uma compra!");
            window.location.href = "#!/home";
        }
    }

    var populateBooksInformation = function() {
        $scope.booksToBuy = [];
        $scope.purchase.books.forEach(book =>
            BooksService.getBookById(book)
                .then(response => {
                    var bookFound = $scope.booksToBuy.find(book =>
                        book.info.id === response.data.id);

                    if (bookFound) {
                        bookFound.qtd++;
                    } else {
                        var newBook = {
                            qtd: 1,
                            info: response.data
                        };

                        $scope.booksToBuy.push(newBook);
                    }
                }));
    }

    $scope.getTotal = function() {
        let total = 0;

        $scope.booksToBuy.forEach(book => total = total + (book.qtd * book.info.price));

        return total;
    }

    init();
    populateBooksInformation();
});