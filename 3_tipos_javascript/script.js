
// tipos em javascript!!! :) 
// São: string(texto), number(número), boolean(expressão para verdadeiro ou falso), array(lista) - object(objeto), function(função), undefined (indefinido).
// valor tipo objt = null(nulo), 
const meuNome = 'liana'; 
console.log(meuNome, typeof meuNome);

let minhaIdade = 29; 
console.log(minhaIdade, typeof minhaIdade);

let estouFelizHoje = true;
console.log(estouFelizHoje, typeof estouFelizHoje); 
estouFelizHoje = false; 
console.log(estouFelizHoje, typeof estouFelizHoje);

const oBolsonaroEh = null;
console.log(oBolsonaroEh, typeof oBolsonaroEh)

let bomDia; 
console.log(bomDia, typeof bomDia);

const comprarNaFeira = ["banana", "maçã", "amendoim"];
console.log(comprarNaFeira, typeof comprarNaFeira); 

const alunas = {
    kristhel: "gótica", 
    alice: {
        feliz: true, 
        escritora: true
    }
}
console.log(alunas, typeof alunas); 

function bomTarde () {
    console.log("bom dia de sábado gente!")
    return 15 + ' eita nóis';
}
console.log(bomTarde(), typeof bomTarde)
