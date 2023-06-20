
const alunos = ["maria", "joão", "carlos", "angela"]
const media = [10,9,7,10]

const mediaAlunos = [alunos, media]

function retornaAlunoMedia(aluno){
    // caso estiver incluso...
    if (mediaAlunos[0].includes(aluno)){

        // não é a mesma variável lá de cima!!
        const alunos = mediaAlunos[0];
        const media = mediaAlunos[1];


        // const [alunos,medias] = mediaAlunos ||| IGUAL LÁ EM CIMA



        const indice = alunos.indexOf(aluno);

        const mediaExibida = media[indice];
        
        console.log(`o ${aluno} tem a média: ${mediaExibida}.`)

    } else{
        console.log(`Aluno não encontrado.`);
    }
}

retornaAlunoMedia("joão");