//aula1-arraysPush.js

const notas = [1,2,3];
notas.push(4); // adiciona um novo elemento ao array
notas.push(5);// adiciona um novo elemento ao array

// [1,2,3,4,5]

notas [1] = 10;

// notas [1] = 10 DIFERENTE! notas = [1,4,6]

const media = (notas[0] + notas[1] + notas[2] +notas[3] + notas[4])/notas.length
console.log(media);

// let vs const | ambas podem ser usadas