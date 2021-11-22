const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const a = names.reduce((base, valor)=> {
  valor.split('').filter((letra)=> (letra.toLowerCase() === 'a') ? base += 1 : base)
  return base;
}, 0)

console.log(a);
