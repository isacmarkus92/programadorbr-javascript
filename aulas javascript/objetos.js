// var objeto = {}

var aluno = { nome: "Igor", nota: 7.5 }
    //a propriedade abaixo foi criada após termos inserido aluno.matricula

var novaProp = "lastName"


console.log(aluno.nome);
console.log(aluno.nota);

// objetos também aceitam array

var aluno = { nome: "João", nota: [7.5, 5.0, 6.5] };

console.log(aluno.nome + " - " + aluno.nota[2]);

//mesmo depois de criado podemos inserir ao objeto mais informações

aluno.matricula = 2345;
console.log(aluno.nome + " - " + aluno.nota[2] + " - " + aluno.matricula);

aluno["sobrenome"] = "Oliveira"

console.log(aluno);