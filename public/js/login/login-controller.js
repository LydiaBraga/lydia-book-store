angular.module('app.LoginController',[])

.controller('LoginController', function ($rootScope, $scope, LoginService, PurchaseService) {
    $rootScope.logged = LoginService.getLoginFromLocalStorage();
    $scope.errorLogin = false;

    $scope.login = function() {
        if ($scope.userEmail && $scope.userPassword) {
            let credentials = {
                email: $scope.userEmail,
                password: $scope.userPassword
            };

            LoginService.login(credentials).then(response => {
                LoginService.saveLoginInLocalStorage(response.data);
                $rootScope.logged = true;
                $scope.errorLogin = false;
                cleanInputs();
                window.location.href = "#!/home";
            }, response => {
                LoginService.removeLoginFromLocalStorage(response.data);
                $scope.errorLogin = true;
                cleanInputs();
            });
        }
    }

    $scope.logout = function() {
        $rootScope.logged = false;
        LoginService.removeLoginFromLocalStorage();
        PurchaseService.removePurchaseFromLocalStorage();
        window.location.href = "#!/home";
    }

    $scope.goToShoppingCart = function() {
        $scope.purchase = PurchaseService.getPurchaseFromLocalStorage();

        if ($scope.purchase) {
            window.location.href = "#!/purchases";
        } else {
            window.alert("Seu carrinho ainda está vazio!");
        }
    }

    $scope.goToTrackOrders = function() {
        window.location.href = "#!/trackOrders";
    }

    var cleanInputs = function() {
         $scope.userEmail = "";
         $scope.userPassword = "";
    }
});