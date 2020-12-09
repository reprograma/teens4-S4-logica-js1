let precisaTomar = true;
let temSeringa = true;
let temAlgodao = true;
let temRemedio = true;

let temGato = true;
let temPaciencia = true;
let posturaCorreta = true;
let tomouRemedio = true;

const nome = "Berg";
let idade = 4;

console.log("Aqui está a ficha do seu gato: ");
console.log("Nome: ", nome);
console.log("Variável do tipo: ", typeof (nome));
console.log("Idade: ", idade, " anos");
console.log("Variável do tipo: ", typeof (idade));

console.log("Primeiro vamos checar se temos tudo que precisamos");

if (!temRemedio || !temSeringa || !temRemedio) {
    console.log("Melhor preparar melhor as coisas pra dar o remédio!");
}
else if (!precisaTomar) {
    console.log("Seu animal não precisa tomar esse remédio! Não vamos estressar ele, ta?");
}
else {
    console.log("Você tem tudo que é necessário! Então podemos começar!");
    
    console.log("Agora vamos dar o remédio!");

    if (!temGato) {
        console.log("Vá buscar o gato!");
    }
    else if (!temPaciencia){
        console.log("Você não está em um bom dia pra fazer essas coisas! Peça que outra pessoa lhe ajude!");

    }
    else if (!posturaCorreta) {
        console.log("Mude sua postura!");
    }
    else if (!tomouRemedio) {
        console.log("Comece novamente! E com calma!");
    }
    else {
        console.log("Deu tudo certo! Parabéns, você é uma ótima tutora!");
    }
}




