angular.module('app.UserController',[])

.controller('UserController', function ($scope, UserService) {
    function list() {
        UserService.list().then(response => {
            console.log(response.data)
            $scope.users = response.data;
        });
    }
    list();

    $scope.save = function () {
        UserService.save($scope.newSubscriber).then(response => {
            $scope.newUser = {};
            list();
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

    $scope.login = function() {
        if ($scope.userEmail && $scope.userPassword) {
            let credentials = {
                email: $scope.userEmail,
                password: $scope.userPassword
            };

            UserService.login(credentials).then(response => {
                console.log(response.data);
            });
        }
    }
});