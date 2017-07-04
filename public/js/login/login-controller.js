angular.module('app.LoginController',[])

.controller('LoginController', function ($rootScope, $scope, $location, LoginService) {
    $rootScope.activetab = $location.path();

    $scope.login = function() {
        if ($scope.userEmail && $scope.userPassword) {
            let credentials = {
                email: $scope.userEmail,
                password: $scope.userPassword
            };

            LoginService.login(credentials).then(response => {
                console.log(response.data);
            });
        }
    }
});