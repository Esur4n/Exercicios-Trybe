// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'uva', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['suco de laranja', 'gelo', 'nada'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
}
console.log(fruitSalad(specialFruit, additionalItens));