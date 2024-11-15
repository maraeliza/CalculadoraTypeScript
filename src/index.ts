import CalculadoraDecimal from "./CalculadoraDecimal.js";
import CalculadoraHexadecimal from "./CalculadoraHexadecimal.js";
import ICalculadora from "./ICalculadora.js";

const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("button")!;
const selOp = document.getElementById("selOperacao") as HTMLInputElement;

const input1H = document.getElementById("num1H") as HTMLInputElement;
const input2H = document.getElementById("num2H") as HTMLInputElement;
const buttonH = document.getElementById("buttonH")!;
const selOpH = document.getElementById("selOperacaoH") as HTMLInputElement;

const divDec = document.getElementById("calcDec") as HTMLInputElement;
const divHex = document.getElementById("calcHex") as HTMLInputElement;

const selModo = document.getElementById("selModo") as HTMLInputElement;

const resP = document.getElementById("result") as HTMLInputElement;

divHex.style.display = "none";

function calcular(){
    var calculadora:ICalculadora;
    var modo = selModo.value;
    var n1 = 0;
    var n2 = 0;
    if(modo == "modoDecimal"){
        calculadora = new CalculadoraDecimal();
        
        n1 = Number(input1.value);
        n2 = Number(input2.value);

    }else{
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

button.addEventListener("click", calcular)
buttonH.addEventListener("click", calcular)


selModo.addEventListener("change", function(){
    const modo = selModo.value;
    if(modo == "modoDecimal"){
        divDec.style.display = "block";
        divHex.style.display = "none";
    }else{
        divDec.style.display = "none";
        divHex.style.display = "block";
    }
})
