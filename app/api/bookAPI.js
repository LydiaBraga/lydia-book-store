const express = require('express');
const _ = require('lodash');
const router = express.Router();

let bookStorage = [
    {
        id: 0,
        name: "Harry Potter e a Pedra Filosofal",
        author: "J. K. Rowling",
        year: 2000,
        publishingHouse: "Rocco",
        gender: "Infanto-Juvenil",
        synopsis: "Harry Potter é um garoto comum que vive num armário debaixo da escada da cada dos seus tios. Sua vida muda quando ele é resgatado por uma coruja e levado para a Escola de Magia e Bruxaria de Hogwarts. Lá ele descobre tudo sobre a misteriosa morte de seus pais, aprende a jogar quadribol e enfrenta, num duelo, o cruel Voldemort.",
        price: 30.00,
        image: "resources/images/books/harry_potter_e_a_pedra_filosofal.jpg"
    },
     {
        id: 1,
        name: "Harry Potter e a Câmara Secreta",
        author: "J. K. Rowling",
        year: 2000,
        publishingHouse: "Rocco",
        gender: "Infanto-Juvenil",
        synopsis: "Depois de férias aborrecidas na casa dos tios trouxas, está na hora de Harry Potter voltar a estudar. Coisas acontecem, no entanto, para dificultar o regresso de Harry. Persistente e astuto, nosso herói não se deixa intimidar pelos obstáculos e, com a ajuda dos fiéis amigos Weasley, começa o ano letivo na Escola de Magia e Bruxaria de Hogwarts. As novidades não são poucas. Novos colegas, novos professores, muitas e boas descobertas e... um grande e periogoso desafio.",
        price: 29.00,
        image: "resources/images/books/harry_potter_e_a_camara_secreta.jpg"
    },
    {
        id: 2,
        name: "Harry Potter e o Prisioneiro de Azkaban",
        author: "J. K. Rowling",
        year: 2000,
        publishingHouse: "Rocco",
        gender: "Infanto-Juvenil",
        synopsis: "Juntamente com Rony e Hermione, seus melhores amigos, Harry Potter está no terceiro ano na Escola de Magia e Bruxaria de Hogwarts. Os assustadores guardas da prisão de Azkaban foram chamados para vigiar as entradas da escola, pois um perigoso assassino está foragido e tudo indica que o seu alvo é o herdeiro de Lílian e Tiago Potter.",
        price: 32.00,
        image: "resources/images/books/harry_potter_e_o_prisioneiro_de_azkaban.jpg"
    },
    {
        id: 3,
        name: "Harry Potter e o Cálice de Fogo",
        author: "J. K. Rowling",
        year: 2000,
        publishingHouse: "Rocco",
        gender: "Infanto-Juvenil",
        synopsis: "As férias de verão vão se arrastando e Harry Potter mal pode esperar pelo início do ano letivo. É o seu quarto ano na Escola de Magia e Bruxaria de Hogwarts, e há feitiços a serem aprendidos, poções a serem preparadas e aulas de Adivinhação, entre outras, a serem assistidas. Harry anseia por tudo isso. Porém, muitos outros acontecimentos surpreendentes ja estão em marcha...",
        price: 32.00,
        image: "resources/images/books/harry_potter_e_o_calice_de_fogo.jpg"
    },
    {
        id: 4,
        name: "Harry Potter e a Ordem da Fênix",
        author: "J. K. Rowling",
        year: 2000,
        publishingHouse: "Rocco",
        gender: "Infanto-Juvenil",
        synopsis: "Harry Potter vai começar seu quinto ano na Escola de Magia e Bruxaria de Hogwarts. Está desesperado para retornar à escola e descobrir por que seus melhores amigos, Rony e Hermione, andaram tão misteriosos durante as férias. Porém, o que o jovem bruxo está prestes a descobrir nesse novo ano em Hogwarts vai provocar uma grande reviravolta em seu mundo.",
        price: 32.00,
        image: "resources/images/books/harry_potter_e_a_ordem_da_fenix.jpg"
    },
    {
        id: 5,
        name: "Harry Potter e o Enigma do Príncipe",
        author: "J. K. Rowling",
        year: 2000,
        publishingHouse: "Rocco",
        gender: "Infanto-Juvenil",
        synopsis: "Estamos em pleno verão, mas há uma estranha névoa quem comprime as vidraças. Harry Potter espera, inquieto, em seu quarto na casa dos tios, a visita do professor Dumbledore. Numa das últimas vezes em que viu o diretor, ele travava um duelo corpo-a-corpo com Lord Voldemort. Harry não entende muito bem qual será o motivo para Dumbledore aportar assim, de repente, na casa de seus tios?",
        price: 32.00,
        image: "resources/images/books/harry_potter_e_o_enigma_do_principe.jpg"
    },
    {
        id: 6,
        name: "Harry Potter e as Relíquias da Morte",
        author: "J. K. Rowling",
        year: 2000,
        publishingHouse: "Rocco",
        gender: "Infanto-Juvenil",
        synopsis: "Harry Potter está aguardando na rua dos Alfeneiros. A Ordem da Fênix chegará em breve para transferi-lo, em segurança, do endereço de sua família trouxa, sem que Voldemort e seus seguidores saibam. A partir daí, o que Harry deverá fazer? Como será capaz de cumprir a missão, aparentemente impossível, que Dumbledore lhe deixou?",
        price: 32.00,
        image: "resources/images/books/harry_potter_e_as_reliquias_da_morte.jpg"
    },
    {
        id: 7,
        name: "Anjo da Escuridão",
        author: "Sidney Sheldon e Tilly Bagshave",
        year: 2012,
        publishingHouse: "Record",
        gender: "Suspense",
        synopsis: "Um rico negociador de artes é brutalmente assassinado em sua mansão em Hollywood Hills. No chão do quarto, uma verdadeira cena de horror: Andrew Jakes está amarrado ao corpo nu de sua jovem e bela esposa, violentamente espancada e estuprada. O detetive Danny McGuire, comovido com a tragédia da linda e vulnerável mulher, empenha-se na busca do culpado. Mas todos os seus esforços mostram-se em vão, e Angela Jakes desaparece misteriosamente depois de doar sua milionária herança. Anos depois, Danny está casado e trabalha como agente da Interpol na França quando é procurado por Matt Daley, filho do homem cruelmente assassinado. Danny não hesita em seguir as promissoras evidências que apontam para um único suspeito: uma brilhante assassina que está sempre um passo à frente de todos e que pode estar a um triz de encontrar sua nova vítima.",
        price: 25.00,
        image: "resources/images/books/anjo_da_escuridao.jpg"
    },
    {
        id: 8,
        name: "Assassinato no Expresso do Oriente",
        author: "Agatha Christie",
        year: 2014,
        publishingHouse: "Nova Fronteira",
        gender: "Suspense",
        synopsis: "Nada menos que um telegrama aguarda Hercule Poirot na recepção do hotel em que se hospedaria, na Turquia, requisitando seu retorno imediato a Londres. O detetive belga, então, embarca às pressas no Expresso do Oriente, inesperadamente lotado para aquela época do ano. O trem expresso, porém, é detido a meio caminho da Iugoslávia por uma forte nevasca, e um passageiro com muitos inimigos é brutalmente assassinado durante a madrugada. Caberá a Poirot descobrir quem entre os passageiros teria sido capaz de tamanha atrocidade, antes que o criminoso volte a atacar ou escape de suas mãos. ",
        price: 31.90,
        image: "resources/images/books/assassinato_no_expresso_do_oriente.jpg"
    },
    {
        id: 9,
        name: "O Misterioso caso de Styles",
        author: "Agatha Christie",
        year: 2010,
        publishingHouse: "Nova Fronteira",
        gender: "Suspense",
        synopsis: "Nada menos que um telegrama aguarda Hercule Poirot na recepção do hotel em que se hospedaria, na Turquia, requisitando seu retorno imediato a Londres. O detetive belga, então, embarca às pressas no Expresso do Oriente, inesperadamente lotado para aquela época do ano. O trem expresso, porém, é detido a meio caminho da Iugoslávia por uma forte nevasca, e um passageiro com muitos inimigos é brutalmente assassinado durante a madrugada. Caberá a Poirot descobrir quem entre os passageiros teria sido capaz de tamanha atrocidade, antes que o criminoso volte a atacar ou escape de suas mãos. ",
        price: 31.90,
        image: "resources/images/books/o_misterioso_caso_dos_styles.jpg"
    },
    {
        id: 10,
        name: "O Caso do Hotel Bertram",
        author: "Agatha Christie",
        year: 2010,
        publishingHouse: "Nova Fronteira",
        gender: "Suspense",
        synopsis: "Nada menos que um telegrama aguarda Hercule Poirot na recepção do hotel em que se hospedaria, na Turquia, requisitando seu retorno imediato a Londres. O detetive belga, então, embarca às pressas no Expresso do Oriente, inesperadamente lotado para aquela época do ano. O trem expresso, porém, é detido a meio caminho da Iugoslávia por uma forte nevasca, e um passageiro com muitos inimigos é brutalmente assassinado durante a madrugada. Caberá a Poirot descobrir quem entre os passageiros teria sido capaz de tamanha atrocidade, antes que o criminoso volte a atacar ou escape de suas mãos. ",
        price: 31.90,
        image: "resources/images/books/o_caso_do_hotel_bertram.png"
    },
    {
        id: 11,
        name: "A Outra Face",
        author: "Sidney Sheldon",
        year: 2012,
        publishingHouse: "Record",
        gender: "Suspense",
        synopsis: "A outra face é um thriller psicologicamente intenso. Vencedor do Edgar Allan Poe, um dos mais importantes prêmios para escritores de mistério e suspense, o livro conta a história de Judd Stevens. Psicanalista bem-sucedido, ele se vê subitamente imerso numa rede de intrigas que pode lhe custar a liberdade... e a vida. Duas pessoas de se círculo pessoal foram assassinadas. Terá sido obra de algum de seus pacientes? Entre os suspeitos estão uma atriz decadente e ninfomaníaca, um pai de família com tendências homossexuais, um empresário neurótico e uma jovem misteriosa. Ou, quem sabe, seria o assassino o próprio Dr. Stevens?",
        price: 31.90,
        image: "resources/images/books/a_outra_face.jpg"
    },
    {
        id: 12,
        name: "Um Dia",
        author: "David Nicholls",
        year: 2011,
        publishingHouse: "Intrínseca",
        gender: "Romance",
        synopsis: "15 de julho de 1988. Emma e Dexter se conheceram na noite da festa de formatura. Amanhã eles seguirão caminhos diferentes. Mas onde estarão nesse mesmo dia um ano depois? E nos anos que se seguirem?",
        price: 31.90,
        image: "resources/images/books/um_dia.jpg"
    },
    {
        id: 13,
        name: "Orgulho e Preconceito",
        author: "Jane Austen",
        year: 2008,
        publishingHouse: "Martin Claret",
        gender: "Romance",
        synopsis: "A obre literária de Jane Austen deu ao romance inglês o primeiro impulso para a modernidade, ao tratar do cotidiano de pessoas comuns. De aguda perscepção psicológica, seu estilo destila sempre uma ironia sutil, dissimulada pela leveza da narrativa. Orgulho e Preconceito (1797, é a obra mais conhecida da autora. Jane Austen mostrou como o amor entre os protagonistas era capaz de superar barreiras de orgulho e preconceito, a diferença social entre eles e o escasso poder de decisão concedido à mulher na sociedade da época.",
        price: 31.90,
        image: "resources/images/books/orgulho_e_preconceito.jpg"
    },
    {
        id: 14,
        name: "Persuasão",
        author: "Jane Austen",
        year: 2011,
        publishingHouse: "Martin Claret",
        gender: "Romance",
        synopsis: "Anne Elliot, a heroína de Persusão, é uma nem tão jovem solteira que, seguindo os conselhos de uma amiga, dispensara, sete anos atrás, o belo e valoroso (porém sem título nobiliárquico e sem terras, Frederick Wentworth. No entanto, o futuro sentimental e financeiro de Anne não é muito promissor, e quando o destino a coloca frente a frente com Frederick, agora distinto capitão da Marinha britânica, reflexões, conjecturas e arrependimentos são inevitáveis.",
        price: 31.90,
        image: "resources/images/books/persuasao.jpg"
    }
];

router.get('/', (request, response) => {
    response.json(bookStorage);
});

router.get('/search/book/:id', (request, response) => {
    let book = bookStorage.find(book => book.id == request.params.id);

    if (book) {
        response.json(book);
    } else {
        response.status(404).send('Not Found!');
    }    
});

router.get('/genders', (request, response) => {
    let genders = [];
    bookStorage.forEach(function(book) {
        genders.push(book.gender);
    });
    response.json(_.uniq(genders));
});

router.get('/search/gender/:gender', (request, response) => {
    let books = bookStorage.filter(book => book.gender == request.params.gender);

    if (books) {
        response.json(books);
    } else {
        response.status(404).send('Not Found!');
    }    
});

router.get('/search/all/:searchValue', (request, response) => {
    let books = bookStorage.filter(book => 
        _.includes(book.name.toLowerCase(), request.params.searchValue.toLowerCase())
        || _.includes(book.author.toLowerCase(), request.params.searchValue.toLowerCase())
    );

    if (books) {
        response.json(books);
    } else {
        response.status(404).send('Not Found!');
    }    
});

module.exports = router;