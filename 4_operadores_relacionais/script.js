// os lógicos e os relacionais estarão por aqui
// quando comparamos elementos, recebemos se é verdadeiro ou falso :) 


// maior >, menor < ou igual ==, bora comparar nossas alturas?
const liana = 1.73;
const natasha = 1.65;
const ruanne = 1.70;
const larissa = 1.50;
console.log(liana < natasha); // falso 
console.log(liana == liana); // verdadeiro
console.log(larissa > ruanne); // falso

console.log(larissa >= larissa) // verdadeiro , maior ou igual

// maior que  >
// menor que <
// igual a  ==
// maior ou igual a >=
// menor ou igual a <=  


// qual a diferença entre o =, o ==, e o ===  ?// vulgo, qual a diferença entre o baile e o funk?

let estaChovendo = false; 
let idadeDaMariana = 16;
// um =, atribui valor à algo. está chovendo, valor atribuído é não. idade da Mari, valor é 16. 

console.log(idadeDaMariana == 16);
console.log(idadeDaMariana == 18);
// dois =, é uma comparação, ou uma pergunta: a idade da Mari é igual a 16?
// é igual a 18?  ... no console aparece verdadeiro ou falso para a pergunta. 
console.log(idadeDaMariana === '16');
console.log(idadeDaMariana === 16);
// três =, é uma comparação também, mas é de valor e de tipo: a idade da Mari é 16? 
// e o tipo é o mesmo que foi declarado na let idade? 

// (e) = && 
// (ou) = ||
// (não) = !

console.log(18 == '18' && 18 === '18');
console.log(18 == '18' || 18 === '18');
// com o (e)&& é falso, com o (ou)|| é verdadeiro
console.log(18 != 72);
// a pergunta fica: 18 não é 72? resposta é verdadeiro pq 18 não é 72 