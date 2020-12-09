let nome = "Larissa"
let sobrenome= "Araujo"

const meuNomeCompleto = nome + " " + sobrenome
console.log ("Olá desenvolvedora ! Eu me chamo",meuNomeCompleto, typeof meuNomeCompleto)


function idadeConta(anoAtual, anoNascimento) {
    console.log (`Eu tenho ${anoAtual - anoNascimento} anos.`)
}
idadeConta(2020,2004)

console. log( "Agora vamos ver se o computador sabe fazer conta e condicionais ao mesmo tempo ?")


const idade = 16 
const anoAtual = 2020
const anoNascimento= 2004
    if (idade === anoAtual - anoNascimento) {
    console.log ("O computador sabe fazer conta 😊")
}
else {
    console.log ("Computador não sabe fazer conta 😭")
}

console.log ("Bem, agora listarei algumas coisas que eu gosto de fazer")

const coisasPreferidas = ["Ler livros", "Estudar inglês", "Estudar Matemática", "Ajudar as pessoas",
"Pesquisar sobre questões sociais, raciais, de gênero e etc", "Assistir Shark Tank :)",
"Conversar com meus amigos","Brincar toda hora com meu cachorro"];

console.log ("As minhas atividades preferidas são:",coisasPreferidas, typeof coisasPreferidas);

console.log ("Como eu gosto muito de cachorro, pensei em fazer comparações em relação a quantidade de ração que cada um come")

let neymar = 4 
let madonna = 5 
let robertoCarlos = 5 
let joelma = 9 
let chimbinha = 8 

console.log ("Neymar come mais que Madonna ?")
if (neymar > madonna) {
    console.log ("Sim")
}
else {
    console.log("Não")
}

console.log ("Madonna come mais ou o mesmo que Roberto Carlos ?")
if (madonna >= robertoCarlos) {
    console.log ("Sim")
}
else {
    console.log("Não")
}

console.log ("Joelma come mais que Chimbinha ?")
if (joelma > chimbinha) {
    console.log ("Sim")
}

else {
    console.log ("Não")
}

console.log ("Neymar come mais que Chimbinha e Madonna come menos que Joelma ?")

if (neymar>chimbinha && madonna<joelma ) {
    console.log ("Sim")
}

else {
    console.log ("Não")
}

console.log ("Roberto Carlos come o mesmo que Madonna ou Chimbinha come menos que Joelma ?")
if (robertoCarlos >= madonna || chimbinha<joelma) {
    console.log ("Sim")
} 

else {
    console.log ("Não")
}

const idadeDeEntrada = prompt ("Digite a sua idade, por favor :)")
if (idadeDeEntrada >= 18) {
    alert("Você já pode doar sangue . Ajude outras pessoas !");
  } else if (idadeDeEntrada>=5 ) {
    alert("Você pode pedir aos seus pais para adotar um cachorrinho ou gatinho ;)");
  } else (idadeDeEntrada>=0); {
        alert ("Pode continuar assistindo Dora Aventureira 🤡")
    }
