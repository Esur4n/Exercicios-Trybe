const estados = [
  "Acre",
  "Alagoas",
  "Amapa",
  "Amazonas",
  "Bahia",
  "Ceara",
  "Distrito Federal",
  "Espirito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins"
];
const button = document.querySelector('#botaozao')

for (let i = 0; i < estados.length; i += 1) {
  let option = document.createElement('option');
  option.innerText = estados[i];
  option.value = estados[i];
  document.querySelector('select').appendChild(option);
}

botaozao.addEventListener('click', (event) => {
  event.preventDefault();
})

