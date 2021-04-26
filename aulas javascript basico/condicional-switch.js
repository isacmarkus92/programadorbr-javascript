var nota1 = 8.0;
var nota2 = 0.0;
var media = (nota1 + nota2) / 2;
var conceito = " ";
// html mais exemplos
if (media >= 8) {
    conceito = "Otimo";
} else if (media >= 6.5) {
    conceito = "Bom";
} else {
    conceito = "Regular";
}

console.log(conceito);
console.log(media);
switch (conceito) {
    case "Otimo":
        console.log("Parabens");
        break;
    case "Bom":
        console.log("Quade perfeito");
        break;
    case "Regular":
        console.log("Estude mais");
        break;
    default:
        console.log("Houve algum erro");
        break;
}