var alunos = new Array("Igor", "Jose", "Marcos", "Mariana")

console.log(alunos[0])
    //primeira forma de fazer um Array

var alunos = ["Igor", "Jose", "Marcos", "Mariana"]

console.log(alunos.length)
console.log(alunos[0])
    //segunda forma de fazer Array

var alunos = ["Igor", "José", "Marcos", "Mariana",
    "Joana", "Leo", "João"
]

for (var i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
}
//usando in
var alunos = ["Igor", "José", "Marcos", "Mariana",
    "Joana", "Leo", "João"
]

for (var i in alunos) {
    console.log(i)
}
//usando of
var alunos = ["Igor", "José", "Marcos", "Mariana",
    "Joana", "Leo", "João"
]

for (var aluno of alunos) {
    console.log(aluno)
}