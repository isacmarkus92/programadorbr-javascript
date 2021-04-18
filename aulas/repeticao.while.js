var numero = 5;

//while = enquanto
while (numero < 10) {
    console.log("Número " + numero);
    numero++;
}
console.log("Acabou")

//primeiro exemplo

var numero = Math.random() * 100;

while (numero < 90) {
    console.log(numero);
    numero = Math.random() * 100;
}
console.log(numero + " Neste ponto extrapolou");
console.log("Acabou");