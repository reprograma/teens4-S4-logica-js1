// O mundo mágico das funções! 

// criando uma função

//funcão nomeDaFunção(parametros) { o que queremos que ela faça }

function meuNome (nome) {
    //dentro das chaves, bigodinhos, está dentro do escopo da função; dizemos o que queremos que nossa função faça
 console.log(nome)   
}
//chamando a função
// ela só executa quando for chamada
meuNome("liana");
// "liana" é o argumento da função, ela ocupa o lugar do parâmetro nome


// multiplos parâmetros!! 
function alunas (a,b,c,d,e) {
    console.log(a,b,c,d,e)
    const alunaRepetida = "mariana"
    return console.log(alunaRepetida)
}

alunas("yasmin", "amanda", "luane", "natasha", "rafaela");
// a = yasmin; b = amanda; c = luane; d = natasha; e = rafaela

// return é outra maneira (além dos parâmetros) de retornar algo de dentro do escopo da função.

function soma (a, b) {
    console.log(a+b);
}

soma(55, 10);
soma("mariana", "leticia");

// funções são reaproveitáveis. Você pode chamar várias vezes as funções, escolhendo argumentos diferentes :)

function imprimirLinha(linha) {
    if(linha===1) {
        return console.log("primeira linha")
    } 
    return console.log("não tem linhas")
}

imprimirLinha(1)

// as vezes quando usamos as funções não é necessário o else para retornar algo, usando o return resolve o problema
