//aula5-arraySlice.js

const nomes = ["Helena"
,"Alice"
,"Laur"
,"Maria"
,"Sophi"
,"Manuela"
,"Maitê"
,"Liz"
,"Cecília"
,"Isabella"
,"Luísa"
,"Eloá"
,"Heloísa"
,"Júlia"
,"Ayla"
,"Maria Luísa"
,"Isis"
,"Laura"]

const aula1 = nomes.slice(0, 9);
const aula2 = nomes.slice(9);
console.log(aula1);
console.log(aula2);

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2)
console.log(sala1);
console.log(sala2);
