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

        return $http.get('/api/books/search/gender/' + gender);
    }

    service.getBookById = function(id) {
        return $http.get('/api/books/search/book/' + id);
    }

    service.searchBooks = function(searchValue) {
        return $http.get('/api/books/search/all/' + searchValue);
    }

    service.saveBookInLocalStorage = function(bookId) {
        window.localStorage.setItem("book", JSON.stringify(bookId));
    }

    service.getBookFromLocalStorage = function() {
        return JSON.parse(window.localStorage.getItem("book"));
    }

    service.removeBookFromLocalStorage = function() {
        window.localStorage.removeItem("book");
    }

    return service;
});