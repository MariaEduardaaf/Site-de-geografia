let pergunta = [
    {
        titulo: "1-Os 92 imigrantes na fronteira da turquia possuíam documentos de identificação?",
        alternativa: [
            "Não",
            "sim", 
            "alguns sim",
            
        ],
        correta: 0
    }, {
        titulo: "2-As pessoas possuíam oque no corpo?",
        alternativa: [
            "tatuagens", 
            "bolsas com roupas", 
            "ferimentos no corpo",
            "nenhuma das alternativas"
        ],
        correta: 2
    }, {
        titulo: "3-As famílias viam para o Brasil como?",
        alternativa: [
            "com toda sua família ", 
            "apenas com dinheiro da passagem", 
            "apenas com a roupa do corpo ",
            "nenhuma das alternativas"
        ],
        correta: 1
    }, {
        titulo: "4-Donald Trump queria fazer oque com os pais e seus filhos?",
        alternativa: [
            "separar os filhos dos pais", 
            "mandar os pais de volta e deixar as crianças", 
            "expulsar todos eles",
            "nenhuma das alternativas"
        ],
        correta: 0
    },
    {
        titulo: "5-Donald Trump conseguiu separar os pais dos seus filhos?",
        alternativa: [
            "Sim", 
            "Não", 
        ],
        correta: 1
    },
    {
        titulo: "6-Joe Biden disse que ia tratar as pessoas como?",
        alternativa: [
            "ia expulsar todos", 
            "não ia tratar com respeito", 
            "ia tratar com humanidade e respeito",
            "nenhuma das alternativas"
        ],
        correta: 2
    },
    {
        titulo: "Fim de jogo",
        alternativa: [
            "espero nque tenha gostado"
        ],
        correta: 2
    }
    
];

let app = {
    start: function () {
        this.atualpos = 0;
        this.totalpontos = 0;
        let alts = document.querySelectorAll(".alternativa");
        alts.forEach((element, index) => {
            element.addEventListener("click", () => {
                this.checarResposta(index);
            });
        });
        this.atualizarPontos();
        app.mostraquestao(pergunta[this.atualpos]);
    },

    mostraquestao: function (q) {
        this.qatual = q;
        // mostrando o titulo
        let titleDiv = document.getElementById("titulo");
        titleDiv.textContent = q.titulo;
        // mostrando as alternativas
        let alts = document.querySelectorAll(".alternativa");
        alts.forEach(function (elemet, index) {
            elemet.textContent = q.alternativa[index];
        });
    },

    proximaperg: function () {
        this.atualpos ++;
        if (this.atualpos == pergunta.length) {
            this.atualpos = 0
        }

    },

    checarResposta: function (user) {
        if (this.qatual.correta == user) {
            console.log("correta")
            this.totalpontos ++;
        } else {
            console.log("errada")
            this.mostraresposta()
        }
        this.atualizarPontos();

        this.proximaperg();
        this.mostraquestao(pergunta[this.atualpos]);
    },

    atualizarPontos: function () {
        let scoreDiv = document.getElementById("pontos");
        scoreDiv.textContent = `Sua pontuação é: ${
            this.totalpontos
        }`;
    },

    mostraresposta: function (correto) {
        let resultDiv = document.getElementById("result");
        let result = ""
        //formatar com a mensagem será exibida
        //o erro esta aqui
        if(correto == true) {
            result = "Resposta correta";
        } else {
            let perguntas = pergunta[this.atualpos];
            //obtenha o indice da resposta correta da questão atual
            let indice = perguntas.correta;
            //obtenha o texto da resposta correta da quatão atual
            let ctexto = perguntas.alternativa[indice];
            result = `Incorreto! Resposta Correta: ${ctexto}`
        }
        resultDiv.textContent = result;
}

}
app.start();
