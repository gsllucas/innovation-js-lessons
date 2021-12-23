
// JAVASCRIPT FETCH - 04 VERBOS HTTP (GET, PUT, POST E DELETE)

const url = 'https://crudcrud.com/api/80e91731f4434767b65661a8f0629e91/items';
const headers = new Headers({
  'Content-Type': 'application/json',
});

async function getData() {
  const request = await fetch(url, { headers: headers, method: 'GET' });
  return request;
}

const produto_02 = {
  nome: 'Teclado',
  preco: 'R$ 200',
  tipo: 'Periférico'
}

const jsonBody = JSON.stringify(produto_01);
const stringfyProduto = JSON.stringify(produto_02);

async function postData() {
  const request = await fetch(url, { headers: headers, body: jsonBody, method: 'POST' });
  return request;
}

async function getSpecifyItem(itemId) {
  const newUrl = url + `/${itemId}`;
  const request = await fetch(newUrl, { headers: headers, method: 'GET' });
  return request;
}

async function getItems() {
  const request = await fetch(url, { headers: headers, method: 'GET' });
  return request;
}

async function putData(itemId) {
  const newUrl = url + `/${itemId}`;
  const request = await fetch(newUrl, { headers: headers, body: stringfyProduto, method: 'PUT' });
  return request;
}

async function deleteData(itemId) {
  const newUrl = url + `/${itemId}`;
  const request = await fetch(newUrl, { headers: headers, method: 'DELETE' });
  return request;
}

const post = postData();
post
  .then((value) => value.json())
  .then((json) => console.log(json));

const get = getData();

get
  .then(res => res.json())
  .then(json => console.log(json));

const carro = getSpecifyItem('61c480bc97069d03e8492ce3');

carro
  .then(res => res.json())
  .then(json => console.log(json));

const put = putData('61c480bc97069d03e8492ce3');

put
  .then(response => response)
  .then(json => console.log(json));

const del = deleteData('61c480bc97069d03e8492ce3');

del
  .then(res => res)
  .then(json => console.log(json));

const get = getItems().then(res => res.json()).then(json => console.log(json));


// DESTRUCTURING
const endereco = {
  rua: 'Rua 0009',
  numero: '2000',
  cidade: 'Brasília'
}

const { rua, numero, cidade } = endereco;

console.log(rua);
console.log(numero);
console.log(cidade);

console.log(endereco.rua);

// REST OPERATOR
let convidadosList = [];

function listaDeConvidados(nomeDoLugar, ...convidados) {
  console.log(nomeDoLugar);
  convidadosList = convidados;
}

listaDeConvidados('Coopersystem', 'Gabriel', 'Japa', 'Letícia', 'Victor', 'Stecher', 'Macedo');

console.log(convidadosList);

// SPREAD OPERATOR
console.log(...convidadosList);


const produto_01 = {
  nome: 'Carro',
  preco: 'R$ 20000',
  tipo: 'Automóvel'
}

const novoProduto = {
  ...produto_01,
  fabricante: 'Multilaser'
}

console.log(novoProduto);
console.log(produto_01);
