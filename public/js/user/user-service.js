angular.module('app.UserService',[])

.service('UserService', function ($http) {
    var service = {};

    service.save = function(user) {
        return $http.post('/api/users', user);
    }

    service.edit = function(user) {
        return $http.put('/api/users/', user)
    }

    service.getById = function (id) {
        return $http.get('/api/users/' + id)
    }

    service.delete = function (id) {
        return $http.delete('/api/users/' + id)
    }

    service.login = function(credentials) {
        return $http.post('/api/users/login', credentials);
    }

    service.list = function () {
        return $http.get('/api/users')
    }

    return service;
});