// =========== TIPOS DE VARIAVEIS ===========
// var, let e const
// a diferença de cada uma está no escopo, e a const não pode receber um novo valor
// depois de declarada
var nome = 'Lucas';
console.log(nome);

var idade = 17;

if (idade < 18) {
  var message = 'Não pode beber';
} else {
  var message = 'Pode beber com o Japa';
}

const constante = 'constante';
let variavelLet = 'String com let';
console.log(message);

// =========== TIPOS DE DADOS NO JAVASCRIPT ===========
// String
const string = 'Isso é uma string';
// Number
const numero = 22;
// Boolean
const boolean = true;
// Array
const arrayDeFrutas = ['Pêra', 'Uva', 'Melância', 'Maçã'];
// Objetos
const objetoPessoa = {
  nome: 'Lucas',
  idade: 22,
  faculdade: true,
}
// Null
const valorNulo = null;
// Undefined
const valorUndefined = undefined;
// Função
const funcao = function issoEUmaFuncao() {
  return 'Hello World';
}

// =========== VALOR BOOLEANO ===========
let faculdade = true;
console.log(faculdade);

// =========== NOMEAÇÃO DE VARIAVEIS ===========
//camelCase
const algumaVariavel = 'alguma variavel';

// snake_case
const snake_case = 'snake_case';

// PascalCase
const PascalCase = 'PascalCase';

// =========== OPERADOR DE NEGAÇÃO ===========
const possuiFaculdade = true;
console.log(!possuiFaculdade);

// =========== CONCATENAÇÕES NO JAVASCRIPT ===========
const primeiroNome = 'Lucas ';
const sobrenome = 2;

// Concatenação com sinal de +
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

// Concatenação com template strings
const cidade = 'Brasília';
const bairro = 'Samambaia';

const endereco = `${cidade} ${bairro}`;
const endereco2 = `Brasília Samambaia`;

console.log(endereco);
console.log(endereco2);

// =========== OPERADORES E EXPRESSÕES ARITIMÉTICAS ===========
const expressao =  (4 * 3 - 4) / 6;
console.log(expressao);

// =========== OBJETOS E FORMAS DE ACESSAR OBJETOS ===========
const pessoa = {
  nome: 'Lucas',
  idade: 22,
  faculdade: true
};

// através de ponto
const nomePessoa = pessoa.nome;
console.log(nome);

// através de propriedade nomeada
const faculdadePessoa = pessoa['faculdade'];
console.log(faculdadePessoa);

// =========== ARRAYS E FORMAS DE ACESSAR UM ITEM DE UM ARRAY ===========
const frutas = ['Banana', 'Uva', 'Melância', 'Melão'];
console.log(frutas);

const melancia = frutas[2];
console.log(melancia);

// =========== FUNÇÕES NOMEADAS E FUNÇÕES NOMEADAS COM PARÂMETROS ===========
// Função que gera número aleatório
function gerarNumeroRandomico() {
  return Math.floor(Math.random() * 3);
}

const numeroRandom = gerarNumeroRandomico();

console.log(numeroRandom);

// Função que gera uma fruta randomica, recebendo um index por parâmetro
function gerarFrutaAleatoria(index) {
  return frutas[index];
}

const frutaAleatoria = gerarFrutaAleatoria(numeroRandom);
console.log(frutaAleatoria);

// Função que verificar através de uma entrada de um parâmetro
// se uma pessoa pode ou não beber de acordo com a idade
function podeOuNaoBeber(idade) {
  const maiorDeIdade = 18;
  if (idade < maiorDeIdade) {
    return 'Não pode beber';
  } else {
    return 'Pode beber com o Japa';
  }
}

const idadeGabriel = 17;

const gabrielPodeBeber = podeOuNaoBeber(idadeGabriel);
console.log(gabrielPodeBeber);
