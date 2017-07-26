angular.module('app.PurchaseController',[])

.controller('PurchaseController', function ($rootScope, $scope, LoginService, PurchaseService, BooksService) {
    $scope.buy = false;

    $scope.months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro"];

    $scope.years = [];
    var calculateYears = function() {
        var initYear = 2017;

        for (let index = 0; index < 15; index++) {
            $scope.years.push(initYear + index);        
        }
    }
    calculateYears();

    var init = function() {
        $scope.user = LoginService.getLoginFromLocalStorage();

        if ($scope.user) {
            $scope.purchase = PurchaseService.getPurchaseFromLocalStorage();
            let bookId = BooksService.getBookFromLocalStorage();
            BooksService.removeBookFromLocalStorage();

            if (typeof bookId !== "undefined" && bookId !== null) {
                if (!$scope.purchase) {
                    var books = [];
                    books.push
                    $scope.purchase = {
                        user: $scope.user.id,
                        books: [bookId]
                    }

                    PurchaseService.savePurchaseInLocalStorage($scope.purchase);
                } else {
                    $scope.purchase.books.push(bookId);
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

    $scope.finishPurchase = function() {
        if (PurchaseService.validatePaymentData($scope.payment)) {
            $scope.purchase.payment = $scope.payment;
            $scope.purchase.status = "Pagamento em confirmação";
            PurchaseService.finishPurchase($scope.purchase);
            PurchaseService.removePurchaseFromLocalStorage();
            window.alert("Compra Finalizada!");
            window.location.href = "#!/home";
        } else {
            window.alert("Preencha todos os dados de pagamento!");
        }
        
    }

    $scope.cancelPurchase = function() {
        let userConfirm = window.confirm("Tem certeza que deseja cancelar a compra?");

        if (userConfirm) {
            PurchaseService.removePurchaseFromLocalStorage();
            window.alert("Compra cancelada!");
            window.location.href = "#!/home";
        }
    }

    $scope.buyBooks = function() {
        $scope.buy = true;
    }

    init();
    populateBooksInformation();
});