function media(n1, n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    //console.log(media)
    return media;
}

var resultado1 = media(6, 7);
var resultado2 = media(8, 10);
var resultado3 = media(5, 6);

console.log(resultado1, resultado2, resultado3);

// A estrutura das funções basicamente são as que estão no exemplo. A grande oportunidade que isso nos abre é que ela pode ser declarada várias vezes durante todo o projeto tornando mais dinamico cada passe de informações. Elas seguem uma ordem clara de execução assim como estão executadas resultando um valor ou não. Pode gerar um output e input, podem ser apenas de input, ou podem ser apenas vazias, o que em quase nenhuma vez é recomendado.