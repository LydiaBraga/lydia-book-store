const express = require('express');
const router = express.Router();

let userStorage = [
    {
        id: 0,
        name: "Lydia Braga",
        email: "lydiaccb@hotmail.com",
        cpf: "105.906.326-39",
        address: "R. Dr. João Carneiro da Silva",
        number: 103,
        neighborhood: "Jr Santo Antonio",
        password: "12345"
    },
    {
        id: 1,
        name: "Chris Lima",
        email: "chris_awake@hotmail.com",
        cpf: "104.856.386-35",
        address: "R. Dr. João Carneiro da Silva",
        number: 103,
        neighborhood: "Jr Santo Antonio",
        password: "LydiaAmor"
    },
    {
        id: 2,
        name: "Ana Letícia",
        email: "ana.chavi@hotmail.com",
        cpf: "108.478.856-29",
        address: "R. Dr. João Carneiro da Silva",
        number: 103,
        neighborhood: "Jr Santo Antonio",
        password: "123456"
    }
];

router.get('/', (request, response) => {
    response.json(userStorage);
});

router.get('/:id', (request, response) => {
    let user = userStorage.find(user => user.id == request.params.id);

    if (user) {
        response.json(user);
    } else {
        response.status(404).send('Not Found!');
    }    
});

router.post('/login', (request, response) => {
    let user = userStorage.find(user =>
        user.email == request.body.email && user.password == request.body.password);

    if (user) {
        response.json(user);
    } else {
        response.status(404).send('Not Found!');
    }    
});

router.post('/', (request, response) => {
    let newUser = {
        id: userStorage.length,
        name: request.body.name,
        email: request.body.email,
        cpf: request.body.cpf,
        address: request.body.address,
        number: request.body.number,
        neighborhood: request.body.neighborhood,
        password: request.body.password
    };

    userStorage.push(newUser);

    response.status(201).json(newUser);
});

router.put('/', (request, response) => {
    var user = userStorage.find(user => user.id == request.body.id);
    if (user) {
        user.name = request.body.name || user.name;
        user.email = request.body.email || user.email;
        user.cpf = request.body.cpf || user.cpf;
        user.address = request.body.address || user.address;
        user.number = request.body.number || user.number;
        user.neighborhood = request.body.neighborhood || user.neighborhood;
        user.password = request.body.password || user.password;

        response.json(user);
    }
    else {
        response.status(404).send('Not found!');
    }
})

router.delete('/:id', (request, response) => {
    var userIndex = userStorage.findIndex(user => user.id == request.params.id);
    if (userIndex != -1) {
        userStorage.splice(userIndex, 1);
        response.send('User deleted');
    }
    else {
        response.status(404).send('Not found!');
    }
});

module.exports = router;