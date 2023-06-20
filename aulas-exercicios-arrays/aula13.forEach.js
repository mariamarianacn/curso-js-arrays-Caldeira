// FUNÇÃO CALLBACK: funções criadas a partir de métodos/parÂMETROS

const notas = [20,80];

let somaDasNotas = 0;

for (let nota of notas){
    console.log(notas)
}

notas.forEach(function (nota){
    somaDasNotas += nota;

});

let mediaNotas = somaDasNotas/notas.length;

console.log(`A média final foi ${mediaNotas} `);


/*

notas.forEach(function(){})

ESTRUTURA!
*/