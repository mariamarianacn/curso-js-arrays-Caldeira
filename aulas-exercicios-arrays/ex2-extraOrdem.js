// Ó, não! Maria e Nicole estão na lista errada, Carol e Carolina deveriam estar ali

const nomes = ["Ana", "Angela", "Betina", "Bruna", "Maria" , "Nicole"]

nomes.pop() //não aceita várias atribuições
nomes.pop()

nomes.push("Carol", "Carolina") //aceita várias atribuições

console.log(nomes)