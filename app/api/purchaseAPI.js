const express = require('express');
const router = express.Router();

let purchaseStorage = [
    {
        id: 0,
        books: [0, 1, 2, 3, 4, 5, 6],
        user: 0,
        payment: {
            cardNumber: 458-458-458,
            cardName: "Teste",
            CardOperationMonth: "Janeiro",
            CardOperationYear: 2018,
            cardCode: 458,
            installmentPayment: 2
        },
        status: "Pagamento em confirmação"
    }
];

router.get('/', (request, response) => {
    response.json(purchaseStorage);
});

router.get('/:userId', (request, response) => {
    let purchase = purchaseStorage.filter(purchase =>purchase.user == request.params.userId);

    if (purchase.length !== 0) {
        response.json(purchase);
    } else {
        response.status(404).send('Not Found!');
    }    
});

router.post('/', (request, response) => {
    let newPurchase = {
        id: purchaseStorage.length,
        books: request.body.books,
        user: request.body.user,
        payment: request.body.payment,
        status: request.body.status
    };

    purchaseStorage.push(newPurchase);

    response.status(201).json(newPurchase);
});

module.exports = router;