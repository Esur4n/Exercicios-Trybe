const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const a = arrays.reduce((base, valor)=> base.concat(valor), []);

console.log(a);