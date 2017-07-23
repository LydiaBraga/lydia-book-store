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
                cleanInputs();
                window.location.href = "#!/home";
            }, response => {
                LoginService.removeLoginFromLocalStorage(response.data);
                $rootScope.errorLogin = true;
                cleanInputs();
            });
        }
    }

    $scope.logout = function() {
        $rootScope.logged = false;
        window.localStorage.removeItem("userLogged");
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

    var cleanInputs = function() {
         $scope.userEmail = "";
         $scope.userPassword = "";
    }
});