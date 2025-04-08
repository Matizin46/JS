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

function fnIdiomaPortugues(){
    document.getElementById("menu1").innerText = "INICIAL"
    document.getElementById("menu2").innerText = "SERVIÇOS"
    document.getElementById("menu3").innerText = "CONTATO"
}   

function fnIdiomaIngles(){
    document.getElementById("menu1").innerText = "HOME"
    document.getElementById("menu2").innerText = "SERVICES"
    document.getElementById("menu3").innerText = "CONTACT"
}   

function fnIdiomaItaliano(){
    document.getElementById("menu1").innerText = "INIZIALE"
    document.getElementById("menu2").innerText = "SERVIZI"
    document.getElementById("menu3").innerText = "CONTATTO"
}   

function fnBaner1(){
    document.getElementById("baner").src="imagens/pexels-igor-ovsyannykov-56123-205961.jpg"
}

function fnBaner2(){
    document.getElementById("baner").src="imagens/baner2.jpg"
}

function fnBaner3(){
    document.getElementById("baner").src="imagens/baner3.jpg"
}

function fnDestaque1Troca(){
    document.getElementById("destaque1").src="imagens/Troca1.jpg"
}

function fnDestaque1Original(){
    document.getElementById("destaque1").src="imagens/pexels-raudys-808941.jpg"
}

function fnRegistrarContato(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value
    let informacoesCompleta = nome + " - " + email + "<br>" + mensagem
    document.getElementById("informacoes").innerHTML = informacoesCompleta

    //Limpar os campos
    document.getElementById("nome").value = " "
    document.getElementById("email").value = " "
    document.getElementById("mensagem").value = " "
}