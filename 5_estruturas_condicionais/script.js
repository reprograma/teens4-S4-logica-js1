// toda condição começa com um if(se)... 
// se essa rua se essa rua fosse minhá
// eu mandava eu mandava o javascript
// ladrilhar meu site todo de brilhantes
// para o meu, para o meu amor olhar! 

const bruna = "hipster";
if (bruna == "hipster") {
    console.log("vamos ouvir um baby metal juntas amiga! ");
}
if (10 / 2 == 5) {
    console.log("10 dividido por 2 é 5, e eu tô fazendo as contas certinho");
}
if (bruna == "hipster" && 10 / 2 == 6 ) {
    console.log("yuhullll");
} else {
    console.log("eu sou o 'se não' se não caiu na condição, caiu comigo mana"); 
}

// bora aprender prompt (pergunta) e alert (alerta)? 

const idade = prompt("quantos anos você tem?");

if(idade >= 60 ) {
    alert('você passou dos 60, pode se aposentar');
} else if (idade >= 18) {
    alert('você é maior de idade, já pode fazer carteira de motorista');
} else if (idade >= 13) {
    alert('a adolescencia é essa época incrível né não?!')
} else {
    alert('sorria, vc ainda é uma baby :)')
}

const taCalor = prompt("responda com s ou n: tá calor?");
const temDinheiro = prompt("responda com s ou n: tem dinheiro?");
const podeLocomover = prompt("responda com s ou n: tem como se locomover até a loja ou praia?");
const ehVegan = prompt("responda com s ou n: é vegana?");

if (taCalor === "n") {
    alert ("não vale a pena comer sorvete hoje pq tá frio");
} else if (temDinheiro === "n") {
    alert ("sem dinheiro não vão deixar você comprar um sorvete :("); 
 } else if (podeLocomover === "n") {
    alert ("se não tem como ir buscar, pede que alguém te traga um sorvete, senão, sinto muito :(")
    } else if (ehVegan === "s") {
    alert ("é difícil achar sorvetes veganos por aí, mas acredito que vai dar certo mana!! o/");        
} else { 
    alert("aproveite um gostoso sorvete amiga :)");
}


//exemplo: se for pra fazer um café, diga quantas gramas de pó de café + quantos ml de água + outras variáveis serão usadas pra fazer o café. 
let aguaQuente = 150; 
let poDeCafe = 30;
const totalGramasCafe = aguaQuente + poDeCafe; 
const coadorDeCafe = true;

if ( totalGramasCafe == 180 && coadorDeCafe == true) {
    console.log('posso fazer o meu café coado')
} else {
    console.log('não posso fazer meu café coado');
}