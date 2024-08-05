// const alunos = ['nome', 'nota'];

// if(alunos >= 6) {
// console.log('Os alunos aprovados: ${}')
// }

const alunos = ['Mateus', 'Aline', 'Joao'];
const alunos2 = alunos.map(function(notaAtual){
    notaAtual = {
        nome: notaAtual,
        valor: 7
    }
    return notaAtual;
})

console.log(alunos2)

const a = alunos2.find(function(notaAtual){
    return notaAtual.valor >= 6
})

console.log(a)

al = alunos2.every(function(notaAtual){
    return notaAtual.valor >=6
})

console.log(al)

const alunosAprovados = alunos2.filter(function(notaAtual){
    return notaAtual.valor >=6
})

console.log(alunosAprovados)