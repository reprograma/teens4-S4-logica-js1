let idade = 29;

// enquanto (condição for verdadeira)
while (idade > 0) {
    //faça isso
    console.log("vc tá ficando mais jovem: " + idade)
    //decremento no valor, para o loop rolar
    idade = idade - 1;
}

// condição idade > 0 é o mesmo que só pôr idade (o while vai até o 0, após o 0 é falso)


//imprima só números pares de 1 à 50: 
let numero = 1;

while (numero <= 50) {
    if( numero % 2 === 0){
    console.log(numero, " é par")
    } 
    numero++; 
}

// ++ é igual a numero = numero + 1 
// -- é igual a numero = numero - 1

// loops precisam de 3 fatores para acontecer! 
//1 um valor ou indice
//2 uma condição
//3 um incremento ou decremento do valor

//para(variável contador ; condição ; incremento/decremento)
for(let numero = 0; numero <= 10; numero ++) {
    console.log(numero);
}


//Introdução às posições e às iterações de arrays
// principal diferença é o escopo da função for
const alunas = ["yasmin", "ana tavares", "ana oliveira", "gabi", "jennifer", "isabella"]; 
// posições de arrays(listas) começam a partir do 0
// alunas[0] = yasmin
// alunas[1] = ana tavares


console.log(alunas.length);
// lenght mede quantos items tem numa array(lista)
for(let contador = 0; contador < alunas.length; contador ++) {
    console.log(alunas[0]);
    console.log(alunas[1]);
    console.log(alunas[contador])

}
