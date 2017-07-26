angular.module('app.TrackOrderController',[])

.controller('TrackOrderController', function ($rootScope, $scope, PurchaseService, LoginService, BooksService) {
    $scope.purchases = [];
    $scope.hasOrders = false;

    var populateUserPurchases = function() {
        let user = LoginService.getLoginFromLocalStorage();

        if (user) {
            let purchasesByUser = PurchaseService.getAllPurchasesByUser(user.id)
                .then(response => {
                    $scope.hasOrders = true;
                    response.data.forEach(function(purchaseByUser) {
                        var purchase = {};
                        purchase.booksToBuy = [];
                        purchase.status = purchaseByUser.status;
                        purchaseByUser.books.forEach(function(book) {
                            BooksService.getBookById(book)
                                .then(response => {
                                    var bookFound = purchase.booksToBuy.find(book =>
                                        book.info.id === response.data.id);

                                    if (bookFound) {
                                        bookFound.qtd++;
                                    } else {
                                        var newBook = {
                                            qtd: 1,
                                            info: response.data
                                        };

                                        purchase.booksToBuy.push(newBook);
                                    }
                                });
                        });
                        $scope.purchases.push(purchase);
                    });
                }, response => {$scope.hasOrders = false});
        }
    }

    $scope.getTotal = function(booksToBuy) {
        let total = 0;

        booksToBuy.forEach(book => total = total + (book.qtd * book.info.price));

        return total;
    }

    populateUserPurchases();

});