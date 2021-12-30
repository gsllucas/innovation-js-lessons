class Mamifero {
    constructor(altura, peso, biotipo) {
        this.altura = altura;
        this.peso = peso;
        this.biotipo = biotipo;
    }
    comer() {
        console.log(`${this.biotipo} comeu`);
    }
}
// interface MamiferoInterface {
//   altura: number;
//   peso: number;
//   biotipo: string;
//   comer(): string;
// }
class Gato extends Mamifero {
    comer() {
        console.log(`O gato bebeu o leite da tigela`);
    }
}
const gato = new Gato(70, 15, 'Felino');
gato.comer();
class ClienteBanco {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    set saldo_conta(novo_saldo) {
        this._saldo_conta = novo_saldo;
    }
    get saldo_conta() {
        return this._saldo_conta;
    }
    set conta_bancaria(nova_conta_bancaria) {
        this.conta_bancaria = nova_conta_bancaria;
    }
}
const novoCliente = new ClienteBanco('John Doe', '908908-09098');
console.log(novoCliente.saldo_conta);
novoCliente.saldo_conta = 1900;
console.log(novoCliente.saldo_conta);
class HttpService {
    fecthData() {
        return '';
    }
}
class DioService {
    fecthData() {
        return 'Dio service';
    }
}
class HttpClientService {
    fecthData() {
        return 'HttpClientService';
    }
}
function pegarDados(service) {
    service.fecthData();
}
const dio = new DioService();
const httpclient = new HttpClientService();
pegarDados(httpclient);
//# sourceMappingURL=abstract_class.js.map