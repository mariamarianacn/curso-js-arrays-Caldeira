const sala1 = ["maria", "joão", "larissa"];
const sala2 = ["lara", "marcos", "analice"];

const salasUnidas = sala1.concat(sala2)
const salasUnidas2 = sala2.concat(sala1)

console.log(salasUnidas)
console.log(salasUnidas2)

const eventos = ["natal", "ano novo", "dia das mães"];
const eventosExtras = eventos.concat(["dia dos namorados, festa junina", ["dia das crianças"]]);

// o dia das crianças, por estar entre [], não será contabilizado

// não altera o array original!

console.log(eventos);
console.log(eventosExtras);
