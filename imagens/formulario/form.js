function fnSomar(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat (n1) + parseFloat (n2)
    document.getElementById("resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}

function fnSubtracao(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat (n1) - parseFloat (n2)
    document.getElementById("resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}

function fnMultiplicacao(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat (n1) * parseFloat (n2)
    document.getElementById("resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}

function fnDivisao(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat (n1) / parseFloat (n2)
    document.getElementById("resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}