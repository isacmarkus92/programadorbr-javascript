//No caso de objetos, funções quando em objetos recebem nome de métodos. Variáveis quando em objetos, recebem o nome de propriedades.


//Primeira forma de resolver esse problema
var aluno = {
    nome: "Igor",
    notas: [7, 8],

    media: function(n1, n2) {
        return (n1 + n2) / 2;
    }

}


var aluno1 = {
    nome: "Joao",
    notas: [6, 8],

    media: function(n1, n2) {
        return (n1 + n2) / 2;
    },
}

console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))

//Segunda forma de resolver esse problema

function calcMedia(n1, n2) {
    return (n1 * 2 + n2) / 3
}

var aluno = {
    nome: "Igor",
    notas: [7, 8],
    media: calcMedia
}

var aluno1 = {
    nome: "Joao",
    notas: [6, 8],

    media: calcMedia
}

console.log(aluno.nome);
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

console.log(aluno1.nome);
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));

//Terceira forma de usar. O método this, ajuda que a consideração da leitura do código se aplique a o item identificado ou variavel, por sua presença this. Neste caso, dependendo de cada contexto expecificado, ele trará ferencia aquele contexto independente de onde a função é usada. Note que o console.log é simplificado pois não preciso mais identificar cada variável em cada contexto por que o this já faz isso.

function calcMedia(n1, n2) {
    return (this.notas[0] * 2 + this.notas[1]) / 3;
}

var aluno = {
    nome: "Igor",
    notas: [8, 8],
    media: calcMedia,
};

var aluno1 = {
    nome: "Joao",
    notas: [7, 8],

    media: calcMedia,
};

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());