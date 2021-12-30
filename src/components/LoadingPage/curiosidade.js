let curiosity_serious = [
    {
        "img": "nerd.png", "text": "Lembre-se é sempre importante ler as políticas de privacidade de qualquer serviço contratado."
    },
    {
        "img": "normal.png", "text": "Dados criados nos sites de empresas, como login e senha, também são consideradas dados pessoais e estão sob a jurisdição da LGPD."
    },
    {
        "img": "surprise.png", "text": "Mesmo após a dissolução de uma empresa, os seus dados compartilhados e tratados por ela continuam com a mesma proteção da lei."
    },
    {
        "img": "search.png", "text": "Quando alterado as informação de tratamento de dados, o controlador deverá informar ao titular (podendo esse revogar se discordar)"
    },
    {
        "img": "sad.png", "text": "Em caso de intimações legais e ações judiciais, a empresa poderá utilizar seus dados para sua defesa."
    },
    {
        "img": "nerd.png", "text": "A aplicação não coleta nenhuma informação do usuário, portanto não há necessidade de política de privacidade."
    },
]

let curiosity_funny = [
    {
        "img": "angry.png", "text": "Nunca tente pedir um café para a aplicação! O mascote Segurindo pode ficar nervosamente triste!"
    },
    {
        "img": "doubt.png", "text": "Os criadores, em um momento de loucura, apelidaram a aplicação e o mascote como Segurindo. A mistura de segurança e lindo não ficou muito boa."
    },
    {
        "img": "normal.png", "text":"O sabor favorito de sorvete do Segurindo é flocos, mesmo ele sendo apenas um cadeado com olhos."
    },
    {
        "img": "search.png", "text":"Os criadores da aplicação não saberão de qual empresa é a politica de privacidade, mas o mascote Segurindo pode te julgar por isso."
    }
]

let curiosity_LGPD = [
    {
        "img": "surprise.png", "text": 'Art 15 LGPD: O término do tratamento de dados pessoais ocorrerá se a finalidade for alcançada ou se os dados deixaram de ser necessários para a finalidade.'
    },
    {
        "img": "surprise.png", "text": "Art 20 LGPD: O titular dos dados tem direito a solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado."
    },
    {
        "img": "surprise.png", "text": "Art 4 LGPD: A lei não se aplica ao tratamento feito por pessoa natural para fins não econômicos, fins jornalísticos e artísticos."
    }
]

export function curiosityList()
{
    let result = [];

    let index_catch = [];
    for (var i = 0; i < 3; i++) 
    {
        let randomIndex = (Math.floor(Math.random() * curiosity_serious.length));
        while(index_catch.includes(randomIndex)){
            randomIndex = (Math.floor(Math.random() * curiosity_serious.length));
        }
        result.push(curiosity_serious[randomIndex]);
        index_catch.push(randomIndex);
    }

    result.push(curiosity_funny[ Math.floor((Math.random() * curiosity_funny.length)) ]);

    result.push(curiosity_LGPD[ Math.floor((Math.random() * curiosity_LGPD.length)) ]);

    return result;
}