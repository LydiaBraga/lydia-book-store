angular.module('app.GenderController',[])

.controller('GenderController', function ($rootScope, $scope, BooksService) {
    var getGenders = function() {
        let bookGenders = [];
        BooksService.getBooks().then(response => {
            response.data.forEach(function(book) {
                bookGenders.push(book.gender);
            });
            
            $scope.genders = _.uniq(bookGenders);
        }, response => {
            $scope.genders = [];
        }); 
    }

    getGenders();
});