// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'uva', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['suco de laranja', 'gelo', 'nada'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
}
// console.log(fruitSalad(specialFruit, additionalItens));

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

// console.log(product)

const getNationality = ({ firstName, nationality = 'brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

const multiply = (number, value = 2) => {
  return number * value
};

console.log(multiply(8));