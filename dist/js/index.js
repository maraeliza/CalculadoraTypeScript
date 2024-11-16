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
const selModo = document.getElementById("selModo");
const resP = document.getElementById("result");
$(document).ready(() => {
    $("#calcHex").hide();
    $("#calcDec").show();
    $("#selModo").on("change", function () {
        $("#result").text('0');
        $("#num1").val('0');
        $("#num2").val('0');
        $("#num1H").val('0');
        $("#num2H").val('0');
        var modo = selModo.value.toLowerCase().replace("modo", "");
        $("#modoEscolhido").text(modo);
        if (modo == "decimal") {
            $("#calcHex").hide();
            $("#calcDec").show();
        }
        else {
            $("#calcHex").show();
            $("#calcDec").hide();
        }
    });
});
function calcular() {
    var calculadora;
    var modo = selModo.value.toLowerCase().replace("modo", "");
    var n1 = 0;
    var n2 = 0;
    if (modo == "decimal") {
        calculadora = new CalculadoraDecimal();
        n1 = Number(input1.value);
        n2 = Number(input2.value);
    }
    else {
        calculadora = new CalculadoraHexadecimal();
        n1 = hexaToDec(input1H.value);
        n2 = hexaToDec(input2H.value);
    }
    var result = 0;
    //pega a operação
    var op = modo == "decimal" ? selOp.value : selOpH.value;
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
    if (modo == "hexadecimal") {
        resP.innerHTML = decToHexa(result);
    }
    else {
        resP.innerHTML = String(result);
    }
}
button.addEventListener("click", calcular);
buttonH.addEventListener("click", calcular);
function hexaToDec(nHex) {
    nHex = nHex.trim().toUpperCase();
    if (!/^[0-9A-F]+$/i.test(nHex)) {
        console.error("Valor hexadecimal inválido");
        return 0;
    }
    return parseInt(nHex, 16);
}
function decToHexa(nDec) {
    return nDec.toString(16).toUpperCase();
}
