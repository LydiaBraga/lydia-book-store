const string = require('useful-strings');
const express = require('express');
const router = express.Router();

let bookStorage = [
    {
        id: string.guid(),
        name: "Harry Potter e a Pedra Filosofal",
        author: "J. K. Rowling",
        year: 2000,
        publishingHouse: "Rocco",
        gender: "Infanto-Juvenil",
        synopsis: "Harry Potter é um garoto comum que vive num armário...",
    }
];

router.get('/', (request, response) => {
    response.json(bookStorage);
});

router.get('/:id', (request, response) => {
    let book = db.find(book => book.id == request.params.id);

    if (user) {
        response.json(book);
    } else {
        response.status(404).send('Not Found!');
    }    
});

router.get('/gender/:gender', (request, response) => {
    let books = db.filter(book => book.gender == request.params.gender);

    if (books) {
        response.json(books);
    } else {
        response.status(404).send('Not Found!');
    }    
});

router.delete('/:id', (request, response) => {
    var bookIndex = db.findIndex(book => book.id == request.params.id);
    if (userIndex != -1) {
        db.splice(bookStorage, 1);
        response.send('Book was removed from stock!');
    }
    else {
        response.status(404).send('Not found!');
    }
});

module.exports = router;