function fnSaudacao(){
let nomeCompleto = ""
nomeCompleto = prompt ("Informe seu nome completo")
alert("Seja bem vindo (a) " + nomeCompleto + " ao meu site!")
}

function fnTrocaCorDeFundo(){
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
}

function fnMostrarHoraAtual(){
    let agora = new Date(); // Obtém a data e hora atual
    let horaFormatada = agora.toLocaleTimeString(); // Formata para exibição
    alert("Hora atual: " + horaFormatada); // Exibe a hora no alert
}

function fnTrocarTitulo(){
    let nomeDoTitulo = prompt("Digite o novo título:");
    if (nomeDoTitulo) { // Verifica se o usuário digitou algo
        document.getElementById("titulo").textContent = nomeDoTitulo;
    }
}