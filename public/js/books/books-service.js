angular.module('app.BooksService',[])

.service('BooksService', function ($http) {
    var service = {};

    service.getBooks = function() {
        return $http.get('/api/books');
    }

    service.getGenders = function() {
        return $http.get('/api/books/genders');
    }

    service.getBooksByGender = function(gender) {
        if (gender === 'Todos') {
             return $http.get('/api/books');
        }

        return $http.get('/api/books/gender/' + gender);
    }

    return service;
});