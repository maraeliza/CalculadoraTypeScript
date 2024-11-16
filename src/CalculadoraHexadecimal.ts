import ICalculadora from "./ICalculadora.js";

export default class CalculadoraHexadecimal implements ICalculadora{

    valor:number = 0;

    Adicao(n1:number, n2:number):number {
        return n1+n2;
    };

    Subtracao(n1:number, n2:number):number{
        return n1-n2;
    };

    Multiplicacao(n1:number, n2:number):number{
        return n1*n2;
    };

    Divisao(n1:number, n2:number):number{
        if(n2 != 0){
            return n1/n2;
        }else{
            throw Error("Não é possível dividir por zero!");
        }
    }; 

}  