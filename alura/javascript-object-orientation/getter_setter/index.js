import {Cliente} from "./cliente.js"
import {ContaCorrente} from "./conta.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo"

const cliente2 = new Cliente();
cliente2.nome = "Alice"

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

console.log(contaCorrenteRicardo);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

console.log(conta2);

contaCorrenteRicardo.transferir(200, conta2);
console.log(conta2)