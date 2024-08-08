// Preciso verificar se a idade do aluno é maior que 7 anos 

//Para alunos entre 8 e 12 anos: Infantil
//Para alunos entre 13 e 17 anos: Juvenil
//Para alunos maiores de 18 anos: Adulto

let idadeAluno = 8;

if (idadeAluno > 7 && idadeAluno < 13) {
    console.log ("Aluno deve ser matriculado na categoria infantil 😁👍")
} else if (idadeAluno >=13 && idadeAluno < 18){
    console.log("Aluno deve ser matriculado na categoria Juvenil")
} else if (idadeAluno > 17 ) {
    console.log( "Aluno deve ser matriculado na categoria Adulto")
} else {
    console.log("O aluno nao pode ser matriculado")
}
