angular.module('app.LoginService',[])

.service('LoginService', function ($http) {
    var service = {};

    service.login = function(credentials) {
        return $http.post('/api/users/login', credentials);
    }

    return service;
});