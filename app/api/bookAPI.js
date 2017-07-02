const express = require('express');
const router = express.Router();

let bookStorage = [
    {
        id: 0,
        name: "Harry Potter e a Pedra Filosofal",
        author: "J. K. Rowling",
        year: 2000,
        publishingHouse: "Rocco",
        gender: "Infanto-Juvenil",
        synopsis: "Harry Potter é um garoto comum que vive num armário...",
        price: 30.00
    },
     {
        id: 0,
        name: "Harry Potter e a Câmara Secreta",
        author: "J. K. Rowling",
        year: 2000,
        publishingHouse: "Rocco",
        gender: "Infanto-Juvenil",
        synopsis: "Depois de férias aborrecidas na casa dos tios trouxas...",
        price: 29.00
    },
    {
        id: 0,
        name: "Harry Potter e o Prisioneiro de Azkaban",
        author: "J. K. Rowling",
        year: 2000,
        publishingHouse: "Rocco",
        gender: "Infanto-Juvenil",
        synopsis: "Juntamente com Rony e Hermione, seus melhores amigos, Harry Potter...",
        price: 32.00
    }
];

router.get('/', (request, response) => {
    response.json(bookStorage);
});

router.get('/:id', (request, response) => {
    let book = bookStorage.find(book => book.id == request.params.id);

    if (book) {
        response.json(book);
    } else {
        response.status(404).send('Not Found!');
    }    
});

router.get('/gender/:gender', (request, response) => {
    let books = bookStorage.filter(book => book.gender == request.params.gender);

    if (books) {
        response.json(books);
    } else {
        response.status(404).send('Not Found!');
    }    
});

router.delete('/:id', (request, response) => {
    var bookIndex = bookStorage.findIndex(book => book.id == request.params.id);
    if (bookIndex != -1) {
        bookStorage.splice(bookIndex, 1);
        response.send('Book was removed from stock!');
    }
    else {
        response.status(404).send('Not found!');
    }
});

module.exports = router;