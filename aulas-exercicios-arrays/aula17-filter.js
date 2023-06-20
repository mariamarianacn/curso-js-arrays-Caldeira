const alunos = ["maria", "luiz", "angelico", "ana"];
const medias = [5,8,2,4];

// const reprovados = quem foi reprovado
// alunos.filter =pega os alunos
// aluno -> [maria, luiz...]
// indiceDoAluno -> [5,8,2...], vira isso quando medias[indiceDoAluno]

const reprovados = alunos.filter((aluno, indiceDoAluno) => {
    return medias[indiceDoAluno] < 7; // true
})

console.log(reprovados);