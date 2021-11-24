const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const a = ([Carro, Marca, Ano]) => {
  return {
    Carro,
    Marca,
    Ano,
  }
}

console.log(a(palio));
