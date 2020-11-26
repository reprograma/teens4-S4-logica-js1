// toda começa com um se (if)
// se essa rua se essa rua fosse minha
// eu mandava o javascript lá

// condicional
let le = "cozinheira";
le = "programadora";

if (le == "programadora") {
  console.log("teremos mais uma mulher incrível na TI.");
} else {
  console.log("passaremos fome essa noite :(");
}

// se(condição) {
// faça isso.
//} senão { faça outra ccoisa}

const idade = prompt("diga a sua idade por favor:");
// prompt() - pergunta!
// alert() - alerta!

if (idade >= 60) {
  alert("você já pode se aposentar");
} else if (idade >= 18) {
  alert("você já pode dirigir");
} else if (idade >= 16) {
  alert("você já pode votar");
} else if (idade >= 12) {
  alert("vocÊ pode ajudar a cozinhar");
} else {
  alert("vc é uma baby ainda, relaxa.");
}

// se for maior que 60 - mostra isso, senão se for maior que 18 faça isso....
console.log("será que eu vou aparecer antes do prompt?"); // não, pq o Javascript lê de cima pra baixo
let calor = true;
let temDinheiro = true;
let temVontade = false;

// se na condição quer só checar se é verdadeiro é só por o nome da variavel
// se quer checar que é falso por ! (exclamação) na frente da variável

if( calor === false ) {
    console.log("não está quente hoje pra tomar sorvete");
} else if (temDinheiro === false ) {
    console.log("não to com dinheiro pra tomar um sorvete");
} else if (temVontade === false) {
    console.log("não to com vontade pra tomar um sorvete")
} else {
    console.log("rola tomar o sorvete :)")
}


// ! - não / ou false 

// === true -  tipo boolean, valor true 

//tá calor?
//tem dinheiro?
//tá com vontade?
//tenho como ir até a sorveteria?
//nessa sorveteria vende sorvete?
//a sorveteria tá aberta?
//tem alergia ao sorvete?
