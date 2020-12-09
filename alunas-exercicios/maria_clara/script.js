console.log('Olá!')

let nome = "Maria Clara"
let sobrenome = "Montenegro"
let nomeCompleto = nome + " " + sobrenome
console.log(nomeCompleto, typeof nomeCompleto);

let idade = 16; 
console.log(idade, typeof idade);

const baiana = true;
console.log(baiana, typeof baiana);

console.log ('Livros preferidos')
const livrosPreferidos =  [" Saga Harry Potter", "A última música", " Dom Casmurro", " Um amor pra recordar", "Revolução dos bichos"]
console.log (livrosPreferidos, typeof livrosPreferidos)

console.log('Quantidade de seguidores em milhões')
let justinBieber = 151;
let harryStyles = 33;
let beyonce = 156;
let greysAnatomy = 7;
let chrisEvans = 7;

console.log ("Beyonce tem mais seguidores que Chris Evans?" )
if (beyonce > chrisEvans) {
    console.log ("Claro")
}
else {
    console.log("Never")
}
console.log ("Justin Bieber tem mais segudores que Greys Anatomy?")
if( justinBieber> greysAnatomy ){
    console.log ("Sim")
}
else{
    console.log ("Não")
}

console.log ("Greys Anatomy tem a mesma quantidade de seguidores de Chris Evens e Beyonce tem menos seguidores que Harry Styles.")
if( greysAnatomy == chrisEvans && beyonce < harryStyles ){
    console.log("True")
}
else {
    console.log ("False")
}
console.log ("Justin Bieber tem mais seguidores que Beyonce ou Harry Styles tem menos seguidores que Chris Evan.")
if( justinBieber > beyonce || harryStyles < chrisEvans){
    console.log("True")
}
else{
    console.log("False")
}
console.log ("Harry Styles tem mais seguidores que Beyonce ou Justin Bieber tem mais seguidores que Chris Evans")
if (harryStyles > beyonce || justinBieber > chrisEvans){
    console.log("True")
}
else{
    console.log("false")
}

const idadeDeEntrada = prompt ('Me diga tua idade, por favor!')
if(idadeDeEntrada >=18){
    alert("Tu pode ser presa no Brasil, rsrs" )
}
else if (idadeDeEntrada == 15){
    alert("Tu é debutante" )
}
else if(idadeDeEntrada >=16){
    alert("Tu já pode ajudar a decidir o futuro do país")
}
 else (idadeDeEntrada <14); {
     alert("Tu é uma kid chorona")
 }