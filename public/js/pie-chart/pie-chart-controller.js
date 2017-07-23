angular.module('app.PieChartController', [])

.controller('PieChartController', function ($rootScope, $scope, $routeParams, PurchaseService, BooksService) {

    var populateBestSellersInformation = function () {
        PurchaseService.getAllPurchases().then(response => {
            let booksBought = [];
            response.data.forEach(function (purchase) {
                booksBought = booksBought.concat(purchase.books);
            });

            purchaseOccurrences = _.countBy(booksBought, _.identity);

            $scope.bestSellersChart = {};
            $scope.bestSellersChart.type = "PieChart";
            $scope.bestSellersChart.displayed = false;
            $scope.bestSellersChart.options = { 'width': 1000, 'height': 400 };
            $scope.bestSellersChart.data = {
                "cols": [
                    {
                        id: "book",
                        label: "Book",
                        type: "string"
                    }, {
                        id: "amount",
                        label: "amount",
                        type: "number"
                    }
                ],
                "rows": []
            };

            Object.keys(purchaseOccurrences).forEach(key => {
                BooksService.getBookById(key).then(response => {
                    let c = [];
                    c.push({ v: response.data.name });
                    c.push({ v: purchaseOccurrences[key] });

                    let row = { 'c': c };

                    $scope.bestSellersChart.data.rows.push(row);
                });
            });
        });
    }

    populateBestSellersInformation();
  });