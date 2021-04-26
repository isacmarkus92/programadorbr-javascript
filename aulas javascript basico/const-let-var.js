var numero1 = 4;
let numero2 = 5;
const numero3 = 6;

console.log(numero1);
console.log(numero2);
console.log(numero3);

{
    var numero1 = 4;
    let numero2 = 5;
    const numero3 = 6;

    console.log(numero1);
    console.log(numero2);
    console.log(numero3);

}

// A diferença principal nesse caso de let para var e const, é que dependendo da sua aplicação, dentro ou fora de um escopo, que neste caso em específico acontece por estar presente dentro de um bloco{}, as suas visualizações ou impressões só ocorrem se o escopo pedir para que eles sejam mostrados, caso contrario, são ignorados na execução do códico caso a declaração deles seja feita fora do escopo. Essa diferença é descritar por ela ser global ou local.