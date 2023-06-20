const notas = [1,5,8,10];

const notasAutualizadas = notas.map( (nota) => {

    console.log(nota) // elemento

    return nota + 1 >= 10 ? 10 : nota + 1 // return é índice 

})

console.log(notasAutualizadas)