
// FORMA DE DECLARAR E ATIVAR UMA FUNÇÃO ANÔNIMA
(() => {
  console.log('Caiu na função anônima');
})();

// ARROW FUNCTIONS
const setarString = (value, value2) => console.log(value, value2);

setarString('dasjdaoisdjioasd', 'value 2');

// ARROW FUNCTIONS
const setString = value => console.log(value);


// ESTRUTURA DE CONTROLE UTILIZANDO O IF E ELSE
const idade = 18;

if (idade >= 18) {
  console.log('Pode beber');
} else if (idade === 17) {
  console.log('Pode beber no ano que vem');
} else {
  console.log('Não pode beber');
}

// ESTRUTURA DE CONTROLE UTILIZANDO O SWITCH CASE
switch (idade) {
  case 18:
    console.log('Pode beber');
    break;
  case 17:
    console.log('Pode beber no ano que vem');
    break;
  default:
    console.log('Não pode beber');
  break;
}

// ESTRUTURA DE CONTROLE UTILIZANDO A CONDIÇÃO TERNÁRIA
const idade = 16;

idade >= 18 ? 
  console.log('A pessoa pode beber') : 
  idade === 17 ? console.log('VOce pode beber no ano que vem') : 
  console.log('Voce e menor de idade e nao pode beber');


// LOOPS
const marcaCarros = ['Ford Fiesta', 'Ford Ka', 'Honda Civic', 'Honda Fit'];
const carrosDaFord = [];
const carrosDaHonda = [];

// LOOPS UTILIZANDO O FOR
for (let contador = 1; contador <= marcaCarros.length - 1; contador++) {
  const carro = marcaCarros[contador];
  console.log(carro);
}

// LOOPS UTILIZANDO O FOR IN
for (const carro in marcaCarros) {
  console.log(carro);
}

// LOOPS UTILIZANDO O FOR OF
for (const carro of marcaCarros) {
  const eDaMarcaFord = carro.includes('Ford');
  const eDaMarcaHonda = carro.includes('Honda');

  if (eDaMarcaFord) {
    carrosDaFord.push(carro);
  }

  if (eDaMarcaHonda) {
    carrosDaHonda.push(carro);
  }
}

console.log(carrosDaFord);
console.log(carrosDaHonda);


// LOOPS UTILIZANDO O DO WHILE
let counter = 0;

do {
  counter++;
  console.log(counter);
} while (counter < 10);



// ITERADORES COM FOR EACH - NÃO É POSSÍVEL REALIZAR RETORNOS NO FOR EACH
const foreach = marcaCarros.forEach((value, index, array) => {
  return value;
});

console.log(foreach);

// ITERADORES COM MAP - COM O MAP É POSSÍVEL REALIZAR RETORNOS
const map = marcaCarros.map((value, index, array) => {
  return value;
});

console.log(map);


// TUDO É OBJETO - OS TIPOS DE DADOS (COM EXCEÇÃO DE UNDEFINED E NULL)
// HERDAM MÉTODOS E PROPRIEDADES DE SEUS CONSTRUTORES PAIS
const nome = 'Lucas';
const idade = 22;

const sobrenome = new String('Silva');

console.log(sobrenome);

const arrayqualquer = ['Lucas', 'Silva'];

const endereco = {
  cidade: 'Brasilia',
  rua: 2,
  funcao: () => {
    return [2, 4];
  },
}

endereco.cidade.toUpperCase();
endereco.rua.toFixed();
endereco.funcao().map((value) => value.toFixed(2));

const string = new String();
const numero = new Number();

const object = new Object();

console.log(string);
console.log(numero);
console.log(object);