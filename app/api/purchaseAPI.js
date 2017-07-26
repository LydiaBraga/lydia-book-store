const express = require('express');
const router = express.Router();

let purchaseStorage = [
    {
        id: 0,
        books: [1, 2],
        user: 0,
        payment: {
            cardNumber: 458-458-458,
            cardName: "Teste",
            CardOperationMonth: "Janeiro",
            CardOperationYear: 2018,
            cardCode: 458,
            installmentPayment: 2
        }
    }
];

router.get('/', (request, response) => {
    response.json(purchaseStorage);
});

router.post('/', (request, response) => {
    let newPurchase = {
        id: purchaseStorage.length,
        books: request.body.books,
        user: request.body.user
    };

    purchaseStorage.push(newPurchase);

    response.status(201).json(newPurchase);
});

module.exports = router;