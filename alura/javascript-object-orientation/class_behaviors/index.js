class Cliente {
    nome;
    cpf;
    conta;
    rg;
}

class ContaCorrente {
    agencia;
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
        if(valor > 0) {
            return;
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();

cliente1.nome = "a";
cliente1.cpf = 1111;
cliente1.rg = 11111;
cliente1.conta = new ContaCorrente();
cliente1.conta.agencia = 1111;
cliente1.conta.depositar(100);

cliente1.conta.sacar(50);

console.log(cliente1);