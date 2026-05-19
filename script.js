const blueLock = [

    {
        nome:"Yoichi Isagi",
        descricao:"Grande visão de jogo e inteligência.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/2/24/Yoichi_Isagi_anime_design.png"
    },

    {
        nome:"Rin Itoshi",
        descricao:"O jogador mais forte do Blue Lock.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/e/e7/Rin_Itoshi_anime_design.png"
    },

    {
        nome:"Meguru Bachira",
        descricao:"Especialista em dribles e criatividade.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/8/8d/Meguru_Bachira_anime_design.png"
    },

    {
        nome:"Seishiro Nagi",
        descricao:"Gênio natural do futebol.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/d/d9/Seishiro_Nagi_anime_design.png"
    },

    {
        nome:"Shoei Barou",
        descricao:"Conhecido como Rei.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/3/34/Shoei_Barou_anime_design.png"
    },

    {
        nome:"Gurimu Igarashi",
        descricao:"Jogador conhecido por tentar cavar faltas e provocar adversários.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/7/72/Gurimu_Igarashi_anime_design.png"
    },

    {
        nome:"Aoshi Tokimitsu",
        descricao:"Jogador extremamente forte fisicamente, apesar de sua ansiedade.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/9/9c/Aoshi_Tokimitsu_anime_design.png"
    },

    {
        nome:"Jingo Raichi",
        descricao:"Meio-campista agressivo e especialista em marcação intensa.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/5/5d/Jingo_Raichi_anime_design.png"
    },

    {
        nome:"Ranze Kurona",
        descricao:"Jogador veloz e parceiro ideal para jogadas rápidas.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/e/e4/Ranze_Kurona_colored.png"
    },

    {
        nome:"Nijiro Nanase",
        descricao:"Jogador cooperativo com ótima adaptação em equipe.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/4/46/Nijiro_Nanase_colored.png"
    },

    {
        nome:"Jin Kiyora",
        descricao:"Jogador misterioso do Blue Lock com ótimo controle de bola.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/8/83/Jin_Kiyora_colored.png"
    }

];

const sub20 = [

    {
        nome:"Sae Itoshi",
        descricao:"Craque da seleção japonesa Sub-20.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/6/61/Sae_Itoshi_anime_design.png"
    },

    {
        nome:"Oliver Aiku",
        descricao:"Capitão da seleção.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/f/f8/Oliver_Aiku_anime_design.png"
    },

    {
        nome:"Shuto Sendo",
        descricao:"Atacante do Japão Sub-20.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/5/5d/Shuto_Sendo_anime_design.png"
    },

    {
        nome:"Gen Fukaku",
        descricao:"Goleiro da seleção japonesa Sub-20.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/0/06/Gen_Fukaku_colored.png"
    },

    {
        nome:"Kazuma Niou",
        descricao:"Zagueiro extremamente forte fisicamente.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/6/62/Kazuma_Niou_colored.png"
    },

    {
        nome:"Teppei Neru",
        descricao:"Lateral rápido da seleção japonesa Sub-20.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/5/54/Teppei_Neru_colored.png"
    },

    {
        nome:"Miroku Darai",
        descricao:"Defensor agressivo e veloz.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/e/e5/Miroku_Darai_colored.png"
    },

    {
        nome:"Haru Hayate",
        descricao:"Jogador técnico do Japão Sub-20.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/8/8f/Haru_Hayate_colored.png"
    },

    {
        nome:"Itsuki Wakatsuki",
        descricao:"Jogador da seleção japonesa Sub-20.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/7/74/Itsuki_Wakatsuki_colored.png"
    },

    {
        nome:"Teru Kitsunezato",
        descricao:"Atleta veloz do Japão Sub-20.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/2/2f/Teru_Kitsunezato_colored.png"
    },

    {
        nome:"Kento Chou",
        descricao:"Jogador defensivo com ótima leitura de jogo.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/9/9e/Kento_Cho_colored.png"
    },

    {
        nome:"Shidou Ryusei",
        descricao:"Atacante extremamente explosivo e imprevisível.",
        imagem:"https://static.wikia.nocookie.net/bluelock/images/4/47/Ryusei_Shidou_anime_design.png"
    }

];

function mostrarBlueLock(){

    const resultado =
    document.getElementById("resultado");

    resultado.innerHTML = "";

    blueLock.forEach(personagem => {

        resultado.innerHTML += `

        <div class="personagem">

            <img src="${personagem.imagem}">

            <h3>${personagem.nome}</h3>

            <p>${personagem.descricao}</p>

        </div>

        `;
    });
}

function mostrarSub20(){

    const resultado =
    document.getElementById("resultado");

    resultado.innerHTML = "";

    sub20.forEach(personagem => {

        resultado.innerHTML += `

        <div class="personagem">

            <img src="${personagem.imagem}">

            <h3>${personagem.nome}</h3>

            <p>${personagem.descricao}</p>

        </div>

        `;
    });
}