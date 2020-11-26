//lógicos e relacionais :) 

let mariaClara = 1.56;
let kristhel = 1.72;
let natasha = 1.73;
let rafaela = 1.83;
let marianaAmina = 1.67;
let isabella = 1.70;
let taylayne = 1.57; 
let liana = '1.73';

// maior > 
// menor < 
// maior ou igual >=
// menor ou igual <=
// igual == 

console.log(mariaClara > kristhel) // false - a kristhel é mais alta
console.log(natasha < rafaela) // verdadeiro
console.log(natasha == liana) // true
console.log(natasha === liana) // false - o tipo é diferente.
console.log(taylayne == isabella) // false

// =  atribuiçao da variável
// == comparação , variavel é igual a isso?
// === comparação estrita, compara valor e tipo.

// && = e
// || = ou 
console.log("comparando com && (e) e || (ou)")
// natasha 1.73 é igual liana 1.73? E mariaClara 1.56 é maior que kristhel 1.72? 
console.log(natasha == liana && mariaClara > kristhel) // falso :)

// natasha 1.73 é igual liana 1.73? OU mariaClara 1.56 é maior que kristhel 1.72?
console.log(natasha == liana || mariaClara > kristhel) // verdadeiro :)