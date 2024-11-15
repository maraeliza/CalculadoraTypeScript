import CalculadoraDecimal from "./CalculadoraDecimal.js";
import CalculadoraHexadecimal from "./CalculadoraHexadecimal.js";
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button = document.getElementById("button");
const selOp = document.getElementById("selOperacao");
const selModo = document.getElementById("selModo");
const resP = document.getElementById("result");
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    var calculadora;
    var modo = selModo.value;
    var n1 = 0;
    var n2 = 0;
    if (modo == "modoDecimal") {
        calculadora = new CalculadoraDecimal();
        n1 = Number(input1.value);
        n2 = Number(input2.value);
    }
    else {
        calculadora = new CalculadoraHexadecimal();
    }
    var result = 0;
    //pega a operação
    var op = selOp.value;
    switch (op) {
        case "Adicao":
            result = calculadora.Adicao(n1, n2);
            break;
        case "Subtracao":
            result = calculadora.Subtracao(n1, n2);
            break;
        case "Multiplicacao":
            result = calculadora.Multiplicacao(n1, n2);
            break;
        case "Divisao":
            result = calculadora.Divisao(n1, n2);
            break;
        default:
            result = 0;
            break;
    }
    resP.innerHTML = String(result);
});
