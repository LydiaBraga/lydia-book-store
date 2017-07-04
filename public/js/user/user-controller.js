angular.module('app.UserController',[])

.controller('UserController', function ($rootScope, $scope, $location, UserService) {
    $rootScope.activetab = $location.path();

    $scope.user = {};

    $scope.list = function() {
        UserService.list().then(response => {
            console.log(response.data)
            $scope.users = response.data;
        });
    }

    $scope.save = function () {
        UserService.save($scope.user).then(response => {
            $scope.newUser = {};
            console.log(response.data);
        });
    }

    $scope.delete = function (id) {
        UserService.delete(id).then(response => {
            $scope.newUser = {};
            list();
        });
    }

    $scope.edit = function (id) {
        UserService.get(id).then(response => {
            $scope.newUser = angular.copy(response.data);
        });
    }

    $scope.getById = function (id) {
        UserService.get(id).then(response => {
            $scope.newUser = angular.copy(response.data);
        });
    }
});