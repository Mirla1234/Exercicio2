
const students = [
{
    name: "Arnaldo",
    n1: 7,
    n2: 9
},

{
    name: "Rebeca",
    n1: 8,
    n2: 10
},

{
    name: "Billy",
    n1: 5,
    n2: 7.5
},

{
    name: "Lutus",
    n1: 8,
    n2: 6.5
},

]


function printNoteStudent(student) {
  if ((student.n1 + student.n2)/2 >= 7)  
    alert(`
        A média do(a) aluno(a) ${student.name} é: ${(student.n1 + 
        (student.n2)) / 2}.
        Parabéns ${student.name}! Você foi aprovado(a) no concurso.
        `)
  else 
    alert(`
        A média do(a) aluno(a) ${student.name} é: ${(student.n1 + 
        (student.n2)) / 2}.
        Não foi dessa vez, ${student.name}! Tente novamente.
        `)
}

    for (let student of students) {    
    printNoteStudent(student)
 }
        







