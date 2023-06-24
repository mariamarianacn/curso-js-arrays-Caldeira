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



///////////////////////////// EXEMPLO DOIS:

/*

const idades = [1,2,3,4]

const idadesMostrar = idades.filter(
    function (idade){
        return idade >= 3
    }
)

console.log(idadesMostrar)

// 1. o filter vai pegar o array completo | 2. o array vai ser posto no parametro idade | 3. o filter vai retornar quais sao as idades maiores que 3

*/