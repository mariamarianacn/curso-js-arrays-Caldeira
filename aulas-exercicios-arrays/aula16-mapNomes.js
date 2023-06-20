// aula16-mapNomes.js

const nomes = ["ana Julia", "carol", "maria FERNANDA", "LaRisSa"];

const nomesPadronizados = nomes.map( (nome) =>{
    return nome.toUpperCase()
});

/*const nomesPadronizados = nomes.map( (nome)=>nome.toUpperCase()); */


console.log(nomesPadronizados);
