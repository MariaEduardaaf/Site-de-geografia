let pergunta = [
    {
        titulo: "1-Os 92 imigrantes na fronteira da turquia possuíam documentos de identificação?",
        alternativa: [
            "Não",
            "sim",
            "Alguns sim",

        ],
        correta: 0
    }, {
        titulo: "2-As pessoas possuíam o que no corpo?",
        alternativa: [
            "Tatuagens",
            "Bolsas com roupas",
            "Ferimentos no corpo",
        ],
        correta: 2
    }, {
        titulo: "3-As famílias viam para o Brasil como?",
        alternativa: [
            "Com toda sua família ",
            "Apenas com dinheiro da passagem",
            "Apenas com a roupa do corpo ",
        ],
        correta: 1
    }, 
    {
        titulo: "4-Joe Biden disse que iria tratar as pessoas como?",
        alternativa: [
            "Iria expulsar todos",
            "Não ia tratar com respeito",
            "Iria tratar com humanidade e respeito",
        ],
        correta: 2
    },
    {
        titulo: "5-Sobre os governos:",
        alternativa: [
            "Muitos estão falhando nas suas obrigações morais e legais de defender os mais vuneráveis",
            "Estão sendo totalmente correto na poítica com migrantes",
            "Estão cumprindo suas obrigações morais e legais, defendendo os mais vuneráveis",
        ],
        correta: 0
    },
    {
        titulo: "Fim de jogo",
        alternativa: [
            "Espero que tenham gostado",
            "Deixe seu like",
            "Se inscreva no canal"
        ],
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
        this.atualpos++;
        if (this.atualpos == pergunta.length) {
            this.atualpos = 0
        }

    },

    checarResposta: function (user) {
        if (this.qatual.correta == user) {
            console.log("correta")
            this.totalpontos++;
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
        scoreDiv.textContent = `Sua pontuação é: ${this.totalpontos
            }`;
    },

    mostraresposta: function (correto) {
        let resultDiv = document.getElementById("result");
        let result = ""
        if (correto == true) {
            result = `Resposta Correta`;
        } 
        resultDiv.textContent = result;
    }

}
app.start();
