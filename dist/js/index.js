import CalculadoraDecimal from "./CalculadoraDecimal.js";
import CalculadoraHexadecimal from "./CalculadoraHexadecimal.js";
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button = document.getElementById("button");
const selOp = document.getElementById("selOperacao");
const input1H = document.getElementById("num1H");
const input2H = document.getElementById("num2H");
const buttonH = document.getElementById("buttonH");
const selOpH = document.getElementById("selOperacaoH");
const divDec = document.getElementById("calcDec");
const divHex = document.getElementById("calcHex");
const selModo = document.getElementById("selModo");
const resP = document.getElementById("result");
divHex.style.display = "none";
function calcular() {
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
        n1 = Number(input1H.value);
        n2 = Number(input2H.value);
    }
    var result = 0;
    //pega a operação
    var op = selOp.value || selOpH.value;
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
}
button.addEventListener("click", calcular);
buttonH.addEventListener("click", calcular);
selModo.addEventListener("change", function () {
    const modo = selModo.value;
    if (modo == "modoDecimal") {
        divDec.style.display = "block";
        divHex.style.display = "none";
    }
    else {
        divDec.style.display = "none";
        divHex.style.display = "block";
    }
});
