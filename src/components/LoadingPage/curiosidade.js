let curiosity_serious = [
    {
        "img": "normal.png", "text": "Lembre-se é sempre importante ler as políticas de privacidade de qualquer serviço contratado."
    },
    {
        "img": "normal.png", "text": "Dados criados nos sites de empresas, como login e senha, também são consideradas dados pessoais e estão sob a jurisdição da LGPD"
    },
    {
        "img": "surprise.png", "text": "Mesmo após a dissolução de uma empresa, os seus dados compartilhados e tratados por ela continuam legislativamente com a mesma proteção."
    },
    {
        "img": "search.png", "text": "Em caso de alteração de informação de tratamento de dados, o controlador deverá informar ao titular as alterações. Podendo o titular revogá-lo caso discorde da alteração."
    }
]

let curiosity_funny = [
    {
        "img": "angry.png", "text": "Nunca tente pedir um café para a aplicação! O Segurindo pode ficar nervoso!"
    },
    {
        "img": "doubt.png", "text": "Os criadores, em um momento de loucura, apelidou a aplicação e o mascote como Segurindo. A mistura de segurança e lindo não ficou muito boa."
    }
]

let curiosity_LGPD = [
    {
        "img": "surprise.png", "text": 'Art 15 LGPD: O término do tratamento de dados pessoais ocorrerá se a finalidade de tratamento foi alcançada ou se os dados deixaram de ser necessários para a finalidade.'
    },
    {
        "img": "surprise.png", "text": "Art 20 LGPD: O titular dos dados tem direito a solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado."
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