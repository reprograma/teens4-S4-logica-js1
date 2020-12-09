//Itens Programáveis
// Começando por quem é  a kristhel. 

alert ("❖•ೋ°   𝑺𝒆𝒋𝒂 𝒃𝒆𝒎-𝒗𝒊𝒏𝒅𝒂 𝒂𝒐 𝑴𝒂𝒏𝒖𝒂𝒍 𝒅𝒂 𝑲𝒓𝒊𝒛𝒎𝒂 𝑰𝑰𝑰   °ೋ•❖");
console.log("Manual da Krizma III");

// qual meu nome
let nome = ('Kristhel');
let sobrenome =( 'Masterson');

const nomeCompleto = ( nome + " "  + sobrenome );
console.log ( "Nome:  " + nomeCompleto );
console.log ("Qual o tipo da variável acima?  " + typeof nomeCompleto);

//qual a minha idade?
function idade (a, b) { 
    let anoAtual = a; 
    let anoNascimento = b;
    console.log ("Idade: ");
    console.log( a - b);

}

idade (2020, 2003);

//pessoas na minha vida - objects

console.log("Segue abaixo uma lista de pessoas importantes pra mim:");

const familiaAmigos = { 
    lucas:"amor da vida",
    magno: "pai",
    claudia: "mãe",
    irmãos: ["nicolly", "nathalia", "henry", "mitchell"],
    amigos: [ "ana", "ivo"]

}  

console.log (familiaAmigos, typeof familiaAmigos);



//manual 
 
let nomeUsuaria = prompt("Digite seu nome:");

alert("Olá" + " " + nomeUsuaria +"!");

console.log ("Qual profissão a Kristhel quer seguir?")

//Profissões? 

let fullstack = true;
let veterinaria = false; 
let padeira = false; 
let techLeader = true;

if ( fullstack && techLeader === true) {
    console.log("Quer seguir a área de TI.");
} else if ( padeira && veterinaria === true) { 
    console.log("Quer ser padeira ou veterinária.")
}


console.log("///RECEITA DE CHÁ///");

const ingredientes = ["1.chá", "2.água", "3.açúcar"];
console.log(ingredientes);

console.log( 1 + 2 + 3);
console.log("6 = CHÁ FEITO COM SUCESSO.")






































