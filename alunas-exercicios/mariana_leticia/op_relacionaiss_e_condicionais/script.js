let toComSonin = true;
if(toComSonin) {
    console.log("Vai dormir mia fia")
} else {
    console.log("Aí sim")
}

let horario1 = 7;
let horario2 = 13;
let horario3 = 15;
let horario4 = 16;
let horario5 = 17;
let horario6 = 20;
let horario7 = 21;
let horario8 = 23;
let horario9 = 15; // esqueci de colocar o 15 la no meio então vai aqui no final mesmo

console.log("horario1 é igual ao horario2?", horario1 == horario2)
console.log("horario3 é maior que o horario2?", horario3 > horario2)
console.log("horario5 é igual ou menor ao horario7?", horario5 >= horario7)
console.log("horario8 é maior que o horario2?", horario8 > horario2)

const relogio = prompt("Digite um numero de zero a 24 para saber oqq é pra fazer em tal hora do dia")

if( relogio >= 23) {
    console.log("Hora de ir a mimir")
}   else if(relogio >= 21) {
        console.log("IIhh vai ter que fazer deveeer denovo aa")
}   else if(relogio >= 20) {
        console.log("Vamo encher o buxo? Hora da jantaa")
}   else if(relogio >= 17) {
        console.log("IIhh vai ter que fazer deveeer")
}   else if(relogio >= 16) {
        console.log("Hora do café da tardeee ebaa")
}   else if(relogio >= 13) {
        console.log("Bora encher o buxo, porque fritar neurônios na escola dá fome")
}   else if(relogio >= 7) {
        console.log("É, não tem jeito, tem que estudar mesmo, é isto ;-;")
}   else if(relogio >= 0) {
        console.log("É bom dormir para ter um dia seguinte produtivo :D")
}   else {
        const relogio = alert("é para colocar somente numeros minha fia(o) dentro do período mencionado")
}
// let horario1 = "escola"
// let horario2 = "muçar, encher o buxo"
// let horario3 = "estudarr"
// let horario4 = "lanchar"
// let horario5 = "fazer deveres"
// let horario6 = "jantarr"
// let horario7 = "fazer + dever"
// let horario8 = "a mimir"
// eu só usei isso aqui de referência mesmo


