//o que são funções?
//dita o que faz, relacão entre elementos, cargos
//um propósito? // tem função da matemática

// função nomeDaFunção (parâmetro) { o que a função faz! }
function meuNome(nome) {
  return nome;
}

// chamada de função (argumento)
// função só aparece quando é chamada
alert(meuNome("gabriela"));
console.log(meuNome("Tai"));

//exemplo possível: evento de click no botao  chama meuNome();


function soma(a, b) {
  return a + b;
}

console.log(soma(50, 15));

function idade(anoAtual, anoNascimento) {
  console.log(`A sua idade é ${anoAtual - anoNascimento}`);
  // template string é com crases e permite usar variaveis ou códigos no meio do texto

  // dentro do bigodinho fica o escopo da função - idade -
}
// fora das funções temos o escopo global do nosso javascript
idade(2020, 1991);

let linha = 1;
function imprimirLinha() {
  if (linha === 1) {
    return console.log("imprimir a primeira linha");
  }
  return console.log("não deu pra imprimir linhas");
}
imprimirLinha(1);
