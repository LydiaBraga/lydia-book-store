angular.module('app.UserController',[])

.controller('UserController', function ($rootScope, $scope, UserService) {

    $scope.user = {};

    $scope.save = function () {
        if (isUserPresent()) {
            if ($scope.user.id) {
                    UserService.put($scope.user).then(response => {
                        $scope.user = {};
                    });
                
            } else {
                UserService.save($scope.user).then(response => {
                    $scope.user = {};
                });
            }
        }        
    }

    $scope.delete = function (id) {
        UserService.delete(id).then(response => {
            $scope.newUser = {};
            list();
        });
    }

    $scope.getById = function (id) {
        UserService.get(id).then(response => {
            $scope.newUser = angular.copy(response.data);
        });
    }

    var isUserPresent = function() {
        return $scope.user.name
            && $scope.user.email
            && $scope.user.cpf
            && $scope.user.address
            && $scope.user.number
            && $scope.user.neighborhood
            && $scope.user.password;
    }
});