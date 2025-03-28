// //alert("olá, seja bem vindo")
// console.log("posso escrever aqui também")
// console.log(10+2)
// console.log(10-2)
// console.log(10*2)
// console.log(10/2)
// console.log("10"+2)
// console.log("10"*2)
// console.log("João " + "Paulo")
// alert(10+2)
// console.log(parseFloat("10")+2) 
// //converção para numero decimal

console.log("Matheus")
console.log(18)
console.warn("atenção")
console.error("Um erro")

// var
// let        variaveis
// const

let nome = "Matheus" /*Declarando a variavel*/
let idade = 18
let telefone = null

console.log (nome, idade) /*Cjama a variavel*/
nome = "Matheus Paes"
console.log(nome)

let nomeCompleto = ""
nomeCompleto = prompt ("Informe seu nome completo")
console.log(nomeCompleto)

console.log(nomeCompleto)
// alert("Seja bem vindo(a) " + nomeCompleto)
// document.write("Seja bem vindo(a) " + nomeCompleto)


let cor = prompt ("Informe uma cor: \n 1 azul \n 2 vermelho \n 3 preto \n 4 Tomato \n 5 Rosa \n 6 Laranja")
let corDeFundo = null

if(cor == "1"){
    corDeFundo = "blue"
}else if(cor == "2"){
    corDeFundo = "red"
}else if(cor == "3"){
    corDeFundo = "black"
}else if(cor == "4"){
    corDeFundo = "tomato"
}else if(cor == "5"){
    corDeFundo = "pink"
}else if(cor == "6"){
    corDeFundo = "orange"
}else{
    corDeFundo = "yellow"
}

document.body.style.backgroundColor = corDeFundo