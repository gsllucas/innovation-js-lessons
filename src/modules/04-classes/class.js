class Pessoa {
  nome;
  idade;
  peso;

  static endereco = 'Brasília DF';

  constructor(nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
  }

  fazerAniversario() {
    this.idade++;
    console.log(this.idade);
  }
}

const novaPessoa = new Pessoa('Lucas', 22, 73);

console.log(novaPessoa);

const novaPessoa1 = new Pessoa('Victor', 23, 70);

console.log(novaPessoa1);

const novaPessoa2 = new Pessoa('Japa', 28, 71);

console.log(novaPessoa2);

console.log(Pessoa);

novaPessoa.fazerAniversario();

console.log(novaPessoa);

console.log(Pessoa.endereco);

class Mamifero {
  constructor(altura, peso, biotipo) {
    this.altura = altura;
    this.peso = peso;
    this.biotipo = biotipo;
  }

  comer() {
    console.log('Gatou comeu');
  }
}

// EXTENDS (HERANÇA)
class Gato extends Mamifero {
  vidas;

  constructor(altura, peso, biotipo, vidas) {
    super(altura, peso, biotipo);

    this.vidas = vidas;
  }
}

const novoGato = new Gato(70, 15, 'Felino', 7);

console.log(novoGato);

const mamifero = new Mamifero(70, 15, 'Felino');

console.log(mamifero);
