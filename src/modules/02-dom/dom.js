// SELETORES DE ELEMENTOS NO DOM

const button = document.querySelector('.button');
const buttonGetById = document.getElementById('button_2');

console.log(button);
console.log(buttonGetById);

// DIMENSOES E DISTÂNCIAS
const offSetTop = document.body.offsetTop;
const offsetWidth = document.body.offsetWidth;
const offsetParent = document.body.offsetParent;
const offsetLeft = document.body.offsetLeft;
const offsetHeight = document.body.offsetHeight;

console.log(offSetTop);
console.log(offsetWidth);
console.log(offsetParent);
console.log(offsetLeft);
console.log(offsetHeight);

// EVENTOS (EVENT LISTENERS)
function handleClick() {
  console.log('Você clicou no botão');
}

button.addEventListener('click', () => console.log('Você clicou no botão'));

button.addEventListener('click', handleClick);
