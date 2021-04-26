var calcMedia = function() {

    return (this.nota1 + this.nota2) / 2;
}

// Problemas dessa solução abaixo é a facilidade de criar erros de digitação devido a tantas propriedades.

var turma = [{
    nome: "Igor",
    nota1: 9,
    nota2: 7,
    media: calcMedia
}, {
    nome: "Joao",
    nota1: 4,
    nota2: 3,
    media: calcMedia
}]

var aluno = turma[0];
console.log(aluno);
console.log(aluno.media());

//Perceba a diferença abaixo



function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

var turma = [
    criarAluno("Igor", 9, 6),
    criarAluno("Joao", 7, 4),
    criarAluno("Maria", 10, 9),
];


var aluno = turma[0];

//Essa propriedade forEach na verdade é uma função dentro de um objeto se tornando então um método.
turma.forEach(function(elemento) {
    console.log(elemento);
})

for (var aluno of turma) {
    console.log(aluno.nome + " - " + aluno.media());
}

//Ainda existe uma forma de usarmos um objeto por meio de um método construtor

function alunoC(nome, n1, n2) {
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function() {
        return (this.nota1 + this.nota2) / 2;
    }
}


var a = new alunoC("Jenifer", 9, 10)
var b = new alunoC("Geraldo", 10, 5)

console.log(a);

//Resumo de objetos

//* As chaves presentes sempre indicam que é um objeto'

var a = {}

//o coneteúdo dentro das chaves demonstram se ele vai ser lido ou não

var a = {
    nome: "Jer",
    sobrenome: "son"
}

console.log(a)