export default class CalculadoraDecimal {
    constructor() {
        this.valor = 0;
    }
    Adicao(n1, n2) {
        return n1 + n2;
    }
    ;
    Subtracao(n1, n2) {
        return n1 - n2;
    }
    ;
    Multiplicacao(n1, n2) {
        return n1 * n2;
    }
    ;
    Divisao(n1, n2) {
        if (n2 != 0) {
            return n1 / n2;
        }
        else {
            throw Error("Não é possível dividir por zero!");
        }
    }
    ;
}
