var str = 'Valor "texto entre aspas" qualquer';

str += " outro texto " + 8;

console.log(str)

// as strings com números só funcionam como texto, somente se houverem uma operação com somentes itens numéricos
// mesmo que sejam strings ele considera a formula matemática proposta
//trabalhar com números em float, ou seja, com dot exigem que as operações sejam feitas em parseFloat, já que são strings e não se aceita operações alfanuméricas em strings, pois só se considera um número inteiro. Já parseInt trabalham com strings e suas operações racionalmente.

var a = "4.5";

var b = "6";

var c = parseFloat(a) + parseFloat(b)

console.log(c)

//o exemplo usou prompt, para que aparecesse no navegador console, mas foi substituido por i para ficar melhor visualização no visual studio code

var i = 10

var numero = ("Digite um número");

var dobro = parseInt(i) + parseInt(i);

console.log("O número que você digitou é " + i + " e o dobro dele é " + dobro);