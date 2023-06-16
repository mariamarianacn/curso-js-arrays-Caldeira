// aula9.indexOfIncludes.js

const alunos = ["maria", "joão", "carlos", "angela"]
const media = [10,9,7,10]

const mediaAlunos = [alunos, media]

function retornaAlunoMedia(aluno){
    // caso estiver incluso...
    if (mediaAlunos[0].includes(aluno)){

        // qual  o índice do aluno? para o joão, é o zero
        const indice = mediaAlunos[0].indexOf(aluno);

        // mediaAlunos const número um (media) + qual índice retornar
        const mediaExibida = mediaAlunos[1][indice];

        // vai resultar no elemento 1
        console.log(`o ${aluno} tem a média: ${mediaExibida}.`)

    } else{
        console.log(`Aluno não encontrado.`);
    }
}

retornaAlunoMedia("joão");