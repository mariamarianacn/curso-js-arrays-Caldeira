const arrayVazia = [];

console.log(arrayVazia) // []
console.log(arrayVazia.length) // 0
console.log(arrayVazia == 0) // true
console.log(arrayVazia[1]) // undefined, não definimos nenhum elemento

const arrayVazia2 = [,,,,];
console.log(arrayVazia2.length) // RETORNA: 4 | temos quatro elementos vazios
console.log(arrayVazia2) // RETORNA: empty items | não ATRIBUIMOS nada aos elementos

// não podemos atribuir novos valores, mas podemos altera-los 
