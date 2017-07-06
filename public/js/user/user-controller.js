angular.module('app.UserController',[])

.controller('UserController', function ($rootScope, $scope, $window,
    UserService, LoginService) {

     var getUser = function() {
        let userFound = LoginService.getLoginFromLocalStorage();
        if (userFound) {
            UserService.getById(userFound.id).then(response => {
                LoginService.saveLoginInLocalStorage(response.data);
                $scope.user = response.data;
            }, response => {
                $scope.user = {};
            });
        } else {
            $scope.user = {};
        }    
    }

    $scope.save = function () {
        if (isUserPresent()) {
            if ($scope.isEdit()) {
                    UserService.edit($scope.user).then(response => {
                        $scope.user = {};
                        window.alert("Usuário editado!");
                        window.location.href = "#!/home";
                     }, response => {
                         window.alert("Erro ao editar usuário!");
                     });
            } else {
                UserService.save($scope.user).then(response => {
                    $scope.user = {};
                    window.alert("Usuário cadastrado!");
                    window.location.href = "#!/home";
                }, response => {
                    window.alert("Erro ao cadastrar usuário!");
                });
            }
        }        
    }

    $scope.delete = function (id) {
        UserService.delete(id).then(response => {
            $scope.user = {};
        }, response => {
            window.alert("Erro ao deletar usuário!");
        });
    }

    $scope.isEdit = function() {
        return $scope.user && (typeof $scope.user.id !== "undefined");
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

    getUser();

});