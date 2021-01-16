export class ContaCorrente {
    agencia;
    _cliente;

    //private field;
    _saldo = 0;

    get cliente() {
        return this._cliente;
    }

    set cliente(cli) {
        if(cli instanceof Cliente) {
            this._cliente = cli;
        }
    }

    get saldo() {
        return this._saldo;
    }

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