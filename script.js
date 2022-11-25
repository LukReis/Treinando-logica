/*Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:
- nome;
- nota da primeira prova;
- nota da segunda prova.
Depois de criada a lista:
- [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/


let namesStudents = []
let averagesFinal = []

for (let i = 0; i < 4; i++) {
  let studentsName = prompt('Digite seu nome')
  let averageOne = prompt('Digite sua primeira nota: ')
  let averageTwo = prompt('Digite sua segunda nota: ')
  averageOne = parseFloat(averageOne)
  averageTwo = parseFloat(averageTwo)
  let finalAverage = (averageOne + averageTwo) / 2

  namesStudents[i] = studentsName 
  averagesFinal[i] = finalAverage 
}


for (let i = 0; i < 4; i++) {
  if (averagesFinal[i] > 7) {
    alert(
      'A média do(a) aluno(a) ' +
        namesStudents[i] +
        ' é: ' +
        averagesFinal[i] +
        '\n Parabens, ' +
        namesStudents[i] +
        '! Você foi aprovado(a) no concurso!'
    )
  } else {
    alert(
      'A média do(a) aluno(a) ' +
        namesStudents[i] +
        ' é: ' +
        averagesFinal[i] +
        '\n Não foi dessa vez, ' +
        namesStudents[i] +
        '! Tente novamente!'
    )
  }
}