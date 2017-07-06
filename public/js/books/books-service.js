angular.module('app.BooksService',[])

.service('BooksService', function ($http) {
    var service = {};

    service.getBooks = function() {
        return $http.get('/api/books');
    }

    return service;
});