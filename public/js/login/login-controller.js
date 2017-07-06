angular.module('app.LoginController',[])

.controller('LoginController', function ($rootScope, $scope, LoginService) {
    $scope.logged = LoginService.getLoginFromLocalStorage();
    $scope.errorLogin = false;

    $scope.login = function() {
        if ($scope.userEmail && $scope.userPassword) {
            let credentials = {
                email: $scope.userEmail,
                password: $scope.userPassword
            };

            LoginService.login(credentials).then(response => {
                LoginService.saveLoginInLocalStorage(response.data);
                $scope.logged = true;
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
        $scope.logged = false;
        window.localStorage.removeItem("userLogged");
        window.location.href = "#!/home";
    }

    var cleanInputs = function() {
         $scope.userEmail = "";
         $scope.userPassword = "";
    }
});