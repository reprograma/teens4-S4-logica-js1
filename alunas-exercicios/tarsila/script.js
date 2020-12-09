/*Aprendi a comentar assim em uma apostila sobre JavaScript ; )*/
// Aprendi a comentar assim com a minha professora poeta no curso da {Reprograma} na semana sobre JavaScript!


// Operador let com strings aleatórias de uma pessoa que tem um total de zero pontos no quesito criatividade :(
console.log("Adimiráveis belezas do {Reprograma}, a thread")
console.log("brincadeira (*´∀｀)")

let belezaDoReprograma = "Diversidade"
console.log("Belezas do {Reprograma}:")
console.log(belezaDoReprograma, "| tipo |", typeof belezaDoReprograma)

belezaDoReprograma = "Oportunidade"
console.log(belezaDoReprograma, "| tipo |", typeof belezaDoReprograma)

belezaDoReprograma = "Conhecemos pessoas incríveis"
console.log(belezaDoReprograma, "| tipo |", typeof belezaDoReprograma)

belezaDoReprograma = "Temos aulas com professoras lindasssss"
console.log(belezaDoReprograma, "| tipo |", typeof belezaDoReprograma)

belezaDoReprograma = "Aprendemos a mexer no console e no inspetor ; )"
console.log(belezaDoReprograma, "| tipo |", typeof belezaDoReprograma)

belezaDoReprograma = "Conversamos sobre o Padre Marcelo Rossi e suas músicas"
console.log(belezaDoReprograma, "| tipo |", typeof belezaDoReprograma)

// Operador const com strings também aleatórias puxando o saco da {Reprograma} pq relamente mudou minha vida ¯\_(ツ)_/¯
const juroQueFoiInvoluntario = "As strings do valor de belezaDoReprograma fazem uma escadinha, quase uma meia pirâmide que vai ficando larga \n na base e que fica muito \n bonita colorida com o tema Dracula do Visual Studio Code. Era mais fácil ter feito essa lista com uma array pensando agora..."
console.log(juroQueFoiInvoluntario, "| tipo |", typeof juroQueFoiInvoluntario)

// Operador let de novo.
let fuiAoPlantãoDeDúvidas = "Sempre tive dúvidas depois das aulas mas achava que dava conta de pesquisar sozinha. Nunca dava ;-;"
console.log(fuiAoPlantãoDeDúvidas, "| tipo |", typeof fuiAoPlantãoDeDúvidas)
fuiAoPlantãoDeDúvidas = "Essa semana fui e conheci a Raissa que me ajudou muitooo"
console.log(fuiAoPlantãoDeDúvidas, "| tipo |", typeof fuiAoPlantãoDeDúvidas)
/* Eu ainda tenho um pouco de vergonha de tirar as dúvidas na aula, sempre acho que são bestas demais. 
Estou melhorando isso! */
const percebiComOReprograma = ["Necessito do inglês", "Eu não sou tão lerda assim", "Eu consigo digitar relativamente rápido", "Eu posso ser feliz ao mesmo tempo que ganho de dinheiro", "Tenho sorte", "Tenho sotaque", "Gosto de ler livros técnicos", "Talvez minha mãe sinta orgulho de mim", "A vida pode ser muito mais do que o meu quarto ou a frente de um computador"]
console.log("Percebi com a {Reprograma}:")
console.log(percebiComOReprograma)

/* Outros tipo */

// Const number
const primosMaternos = 3
const primosPaternos = 6
console.log("Primos Maternos + Primos Paternos =", primosMaternos + primosPaternos, "primos")

// Boolenaos

const primosMaternosContato = true
console.log("* Tenho contato com meus primos maternos", "(", primosMaternosContato, ")", "| tipo |", typeof primosMaternosContato)
let primosPaternosContato = false
/* let pq gostaria de mudar isso e let é uma variável que é variável ლ(´ڡ`ლ) STONKS!!! */
console.log("* Tenho contato com meus primos paternos", "(", primosPaternosContato, ")", "| tipo |", typeof primosPaternosContato)

// If e Else
let gostoDeMatemática = true
let gostoDeGeografiaFísica = false
console.log("Gosto de Matemática", "(", gostoDeMatemática, ")", "| tipo |", typeof gostoDeMatemática)
console.log("Gosto de Geografia Física", "(", gostoDeGeografiaFísica, ")", " | tipo |", typeof gostoDeGeografiaFísica)


let condicional = "Sim! Coloque uma venda nos meus olhos, me rode e eu vou te dizer pra onde ficam as latitudes e longitudes do Vale do Silício"
let condicional2 = "Isso! Em que universo paralelo Tarsila gosta de Geografia Física? Ela não sabe nem o nome das capitais do próprio país!"
let condicional3 = "Sim! Poucas coisas são mais poderosas que uma menina boa entre meninos nas exatas"
let condicional4 = "Isso mesmo!E eu sou uma vergonha para a Tarsila do universo paralelo que está codando essa joça"

if (gostoDeMatemática) {
    console.log("Você gosta de matemática?")
    console.log(condicional3)
} else {
    console.log("Quer dizer que você não gosta de matemática?")
    console.log(condicional4)
}

/* Agora usando o ponto de exclamação (!) para negar o valor do variável gostoDeMatemática */

if (!gostoDeMatemática) {
    console.log("Você gosta de matemática?")
    console.log(condicional3)
} else {
    console.log("Quer dizer que você não gosta de matemática?")
    console.log(condicional4)
}

/* Eu queria testar o return mas acho que não entendi direito essa parte ಠ_ಠ */

if (gostoDeGeografiaFísica) {
    console.log("Você gosta de Geografia Física?")
    console.log(condicional)
} else {
    console.log("Você não gosta de Geografia Física?")
    console.log(condicional2)
}

/* Agora usando o ponto de exclamação (!) para negar o valor do variável gostoDeGeografiaFísica */

if (!gostoDeGeografiaFísica) {
    console.log("Você gosta de Geografia Física?")
    console.log(condicional)
} else {
    console.log("Você não gosta de Geografia Física?")
    console.log(condicional2)
}

// Function 

console.log("Quanto tempo você leva pra ir dormir?")

function antesDeDormir(escovarOsDentes, tomarBanho, lerAlgumaCoisa, verificarSeNãoTemUmPsicopataEscondidoNoArmárioOuDebaixoDaCama) {
    return console.log(escovarOsDentes + tomarBanho + lerAlgumaCoisa + verificarSeNãoTemUmPsicopataEscondidoNoArmárioOuDebaixoDaCama)

}
console.log(antesDeDormir(5, 5, 20, 3))

/* Não consegui colocar a palavra "minutos" ao lado do 33. No console sempre aparecia embaixo*/

// Botão

const mensagem = alert("Você vai presenciar um grande de caos de uma inciante no JavaScript! Clique em Ok para continuar ou saia e cale-se para sempre!!!")

