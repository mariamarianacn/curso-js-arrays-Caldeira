const sala = ["mari", "anni", "cris", "beto"];
const notas = [1,2,3,4];

const notasDaSala = [sala, notas];

console.log(
    `Quem está na posição 1: ${notasDaSala[0][0]} | Sua nota: ${notasDaSala[1][0]}`
);

console.log(
    `Quem está na posição 4: ${notasDaSala[0][3]} | Sua nota: ${notasDaSala[1][3]}`
);

console.log(
    `Quem está na posição 3: ${notasDaSala[0][2]} | Sua nota: ${notasDaSala[1][2]}`
)