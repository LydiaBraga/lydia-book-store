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

    return service;
});