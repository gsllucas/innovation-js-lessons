// CLASSE ABSTRATA DE CONTRATO
abstract class Mamifero {
  altura: number;
  peso: number;
  biotipo: string;

  constructor(altura, peso, biotipo) {
    this.altura = altura;
    this.peso = peso;
    this.biotipo = biotipo;
  }

  comer(): void {
    console.log(`${this.biotipo} comeu`);
  }
}

// interface MamiferoInterface {
//   altura: number;
//   peso: number;
//   biotipo: string;
//   comer(): string;
// }


// POLIMORFISMO
class Gato extends Mamifero {
  altura: number;
  peso: number;
  biotipo: string;

  comer() {
    super.comer();
    console.log(`O gato bebeu o leite da tigela`);
  }
}

const gato = new Gato(70, 15, 'Felino');

gato.comer();

// GETTERS E SETTERS E ENCAPSULAMENTO
class ClienteBanco {
  nome: string;
  cpf: string;
  private _conta_bancaria: number;
  private _saldo_conta: number;

  constructor(nome: string, cpf: string) {
    this.nome = nome;
    this.cpf = cpf;
  }

  set saldo_conta(novo_saldo: number) {
    this._saldo_conta = novo_saldo;
  }

  get saldo_conta() {
    return this._saldo_conta;
  }

  set conta_bancaria(nova_conta_bancaria: number) {
    this.conta_bancaria = nova_conta_bancaria;
  }

  get conta_bancaria() {
    return this._conta_bancaria;
  }
}

const novoCliente = new ClienteBanco('John Doe', '908908-09098');

console.log(novoCliente.saldo_conta);

novoCliente.saldo_conta = 1900;

console.log(novoCliente.saldo_conta);

// ABSTRAÇÕES
abstract class HttpService {
  fecthData() {
    return '';
  }
}

class DioService implements HttpService {
  fecthData() {
    return 'Dio service';
  }
}

class HttpClientService implements HttpService {
  fecthData() {
    return 'HttpClientService';
  }
}

function pegarDados(service: HttpService) {
  service.fecthData();
}

const dio = new DioService();
const httpclient = new HttpClientService();

pegarDados(httpclient);