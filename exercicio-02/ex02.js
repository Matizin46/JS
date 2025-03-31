let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
 
 
let operacao = prompt("Digite o símbolo da operação (+, -, *, /):");
 
 
if (operacao === "+") {
    let resultado = num1 + num2;
    alert("Resultado: " + resultado);
} else if (operacao === "-") {
    let resultado = num1 - num2;
    alert("Resultado: " + resultado);
} else if (operacao === "*") {
    let resultado = num1 * num2;
    alert("Resultado: " + resultado);
} else if (operacao === "/") {
   
    if (num2 === 0) {
        alert("Erro: Não é possível dividir por zero.");
    } else {
        let resultado = num1 / num2;
        alert("Resultado: " + resultado);
    }
} else {
    alert("Operação inexistente");
}
