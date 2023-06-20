// aula12-mediaForOf.js

const notas = [10, 60.7, 80, 40];

let somaDasNotas = 0;

//   para cada elemento de notas, execute isso:     
for (let nota of notas){
    somaDasNotas += nota;
    
}

console.log(somaDasNotas)

// menos flexível, não é possivel fazer alterações


