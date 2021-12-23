
// HOISTING
// DECLARA A NOMEÇÃO DE VARIAVEIS GLOBAIS PARA O TOPO DO CODIGO
// NO MOMENTO DA COMPILAÇÃO
// POREM O VALOR ATRELADO PARA ELA PERMANECE NO MESMO LUGAR DE
// DECLARAÇÃO
console.log(variavel);
var variavel = 'Alguma valor';

var nome = 'Lucas';
console.log(nome);

// NESTE CASO, O CÓDIGO IRÁ CRASHAR POR CONTA DE
// DE UM ACESSO A VARIAVEL QUE AINDA NÃO FOI DECLARADA
console.log(nome);
const nome = 'Lucas';

const idade = 22;
console.log(idade);


// JAVASCRIPT ASSÍNCRONO
const ms = 2000;
let contador = 0;

setInterval(() => {
  console.log(`Essa ação está sendo executada a cada: ${ms} milisegundos`);
  contador++;
  console.log(contador);
}, ms);

setTimeout(() => {
  console.log(`Essa ação foi executada depois de: ${ms} milisegundos`);
}, 2000);

console.log('Caiu aqui');

// JAVASCRIPT ASSÍCRONO COM PROMISES
const promessa = new Promise((resolve, reject) => {
  const condicao = false;

  if (condicao) {
    resolve('Sua ação foi concluída');
  } else {
    reject(Error('Ocorreu um erro na sua aplicação'));
  }
});

promessa.then((value) => {
  console.log(value);
  console.log('Caiu aqui no then');
});

promessa
  .then()
  .catch((error) => {
    console.log(error);
    console.log('Caiu no catch do erro');
  });

promessa
  .then(() => console.log('Caiu no then'))
  .catch(() => console.log('Caiu no catch'))
  .finally(() => {
    console.log('Caiu no finally');
  });

async function handlePromise() {
  const promessa = new Promise(async (resolve, reject) => {
    const condicao = true;
  
    if (condicao) {
      resolve('Sua ação foi concluída');
    } else {
      reject(Error('Ocorreu um erro na sua aplicação'));
    }
  });

  await Promise.resolve(promessa);
  
  console.log('Depois da promessa');
}

handlePromise();

try {
  const promessa = new Promise((resolve, reject) => {
    const condicao = false;
  
    if (condicao) {
      resolve('Sua ação foi concluída');
    } else {
      reject(Error('Ocorreu um erro na sua aplicação'));
    }
  });

  console.log(await promessa);
  console.log('Depois da promessa');
} catch (error) {
  console.log(error);
}

try {
  console.log(nome);
  const nome = 'Lucas';

} catch (error) {
  console.log(error);
}

console.log('Depois do nome');