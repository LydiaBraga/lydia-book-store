angular.module('app.LoginService',[])

.service('LoginService', function ($http) {
    var service = {};

    service.login = function(credentials) {
        return $http.post('/api/users/login', credentials);
    }

    service.saveLoginInLocalStorage = function(user) {
        window.localStorage.setItem("userLogged", JSON.stringify(user));
    }

    service.removeLoginFromLocalStorage = function() {
        window.localStorage.removeItem("userLogged");
    }

    service.getLoginFromLocalStorage = function() {
        return JSON.parse(window.localStorage.getItem("userLogged")) || false;
    }

    return service;
});