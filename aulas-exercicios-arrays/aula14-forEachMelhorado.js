/////// clássico

const notas = [1,2,3,4];

notas.forEach(function notaElementos1(nota){
    console.log(nota);
});

//////// arrow

notas.forEach( (nota) => {
    console.log(nota);
} );

/////////// externo

function notaElementos2 (nota){
    console.log(nota)
}

notas.forEach(notaElementos2)

//Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função callback retornar algum valor.