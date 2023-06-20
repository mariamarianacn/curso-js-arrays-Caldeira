/// depois:

const notas = [1,5,89,2];

const novasNotas = [...notas];
novasNotas.push(10);

// assim, as notas vai ter NOVOS valores oficiais, diferente do push

console.log(`${notas}`); //  1,5,89,2
console.log(`${novasNotas}`); // 1,5,89,2,10

 // antes: 

 const medias = [1,2,3,4];

 const mediasNovas = medias;

 mediasNovas.push(10)
 console.log(`${mediasNovas} | ${medias}`) // ambas serão iguais, mas queremos que apenas o mediasNOvas tenha o 1,2,3,4,10