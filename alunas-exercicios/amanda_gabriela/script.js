console.log ("Não? Vamos lá então!")

let exemplo = "Vou usar o meu como exemplo: "
console.log (exemplo, typeof exemplo)

let passo1 = "Primero passo: saber seu peso atual (em kg)"
console.log (passo1, typeof passo1) 

let peso = 70
console.log (peso, typeof peso)

let passo2 = "Agora, multiplicamos por 35 (pois, devemos beber 35 ml por kg)"
console.log (passo2, typeof passo2)

console.log ("70 * 35 = ", 70 * 35);

let resultado = "Logo, eu tenho que beber cerca de 2450 ml ou 2 litros e 450 ml por dia :)"
console.log (resultado, typeof resultado)

let beberAgua = "Agora, mude os números e veja o quanto de água você precisa beber por dia :D"
console.log (beberAgua, typeof beberAgua)





const jaSeHidratou = true
console.log (jaSeHidratou, typeof jaSeHidratou)

const naoSeHidratou =  false
console.log (!jaSeHidratou, typeof jaSeHidratou)


//me responda hahahah

if (jaSeHidratou === true) {
    console.log ("Já bebe o suficiente hoje?")
}
else if (jaSeHidratou === false) {
    console.log ("Por favor, beba água!")
}
else if ( naoSeHidratou === true) {
    console.log ("Por favor, beba água!")
}
else if ( naoSeHidratou === false) {
    console.log ("Já bebe o suficiente hoje?")
}






const perguntaAgua = prompt ("Você já se hidratou hoje? Se não, digite 0. Se sim, digite 1.")
if (perguntaAgua <= 0) {
    alert ("Por favor, beba água!")
}
else if (perguntaAgua >= 1) {
    alert ("Já bebeu o suficiente hoje?")
}










