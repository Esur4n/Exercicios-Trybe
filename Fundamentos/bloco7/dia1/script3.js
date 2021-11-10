const button = document.querySelector('button');
const contador = document.querySelectorAll('p')[1];
contador.innerText = 0;
let aumentador = 0;

button.addEventListener('click', () => {
  aumentador += 1;
  contador.innerText = aumentador;
})