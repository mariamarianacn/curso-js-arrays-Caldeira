const notas = [10,7,4.6,9];
let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i]; // chama as notas na posição zero (10)
    
}

let media = somaDasNotas/notas.length
console.log(`O total foi: ${somaDasNotas}`);

//////////////////////////

const numero = ["laura", 1, 2, 3, 4];
let somaGeral = 0;

console.log(numero)

for (let indice = 1; indice <= 4; indice++){
    somaGeral += numero[indice]
   
} 

console.log(`o resultado é: ${somaGeral}, tirando a laura`)