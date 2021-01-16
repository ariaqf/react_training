export class ContaCorrente {
    agencia;
    cliente;

    //private field;
    _saldo = 0;

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor
        }
        return
    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const sacado = this.sacar(valor);
        conta.depositar(sacado);
    }
}