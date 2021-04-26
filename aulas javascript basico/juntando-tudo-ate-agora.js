//Queremos definir um sistema de alunos que deem suas notas e
//situação de aprovado ou não

//A solução para esse problema é por meio de um array
//Defina os nomes
//Defina as notas por notas e sequencia de alunos

var nomes = ["Igor", "José", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

function media(n1, n2) {
    return (n1 + n2) / 2
}

function passou(media) {
    if (media > 7) {
        return "Aprovado";
    } else { return "Reprovado" }
}



for (var index in nomes) {

    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1, nota2);

    console.log(nomes[index] +
        " - " +
        nota1 +
        " - " +
        nota2 +
        " - " +
        media(nota1, nota2) +
        " - " +
        passou(m));
}