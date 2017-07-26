angular.module('app.PurchaseService',[])

.service('PurchaseService', function ($http) {
    var service = {};

    service.getPurchaseFromLocalStorage = function() {
        return JSON.parse(window.localStorage.getItem("purchase"));
    }

    service.savePurchaseInLocalStorage = function(purchase) {
        window.localStorage.setItem("purchase", JSON.stringify(purchase));
    }

    service.removePurchaseFromLocalStorage = function() {
        window.localStorage.removeItem("purchase");
    }

    service.finishPurchase = function(purchase) {
        $http.post('/api/purchases/', purchase);
    }

    service.getAllPurchases = function() {
        return $http.get('/api/purchases/');
    }

    service.validatePaymentData = function(payment) {
        if (payment.cardNumber && payment.cardName && payment.CardOperationMonth &&
            payment.CardOperationYear && payment.cardCode && payment.installmentPayment) {
            return true;
        }

        return false;
    }


    return service;
});