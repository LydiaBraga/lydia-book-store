angular.module('app.LoginController',[])

.controller('LoginController', function ($rootScope, $scope, LoginService) {
    $scope.logged = JSON.parse(window.localStorage.getItem("userLogged")) || false;
    $scope.errorLogin = false;

    $scope.login = function() {
        if ($scope.userEmail && $scope.userPassword) {
            let credentials = {
                email: $scope.userEmail,
                password: $scope.userPassword
            };

            LoginService.login(credentials).then(response => {
                window.localStorage.setItem("userLogged", JSON.stringify(response.data));
                $scope.logged = true;
                cleanInputs();
            }, response => {
                window.localStorage.removeItem("userLogged");
                $scope.errorLogin = true;
                cleanInputs();
            });
        }
    }

    $scope.logout = function() {
        $scope.logged = false;
        window.localStorage.removeItem("userLogged");
    }

    var cleanInputs = function() {
         $scope.userEmail = "";
         $scope.userPassword = "";
    }
});