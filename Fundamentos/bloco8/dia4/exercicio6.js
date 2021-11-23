const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const a = grades.map((notas, index)=>{
  const media = notas.reduce((base, atual, indexo)=> (indexo === notas.length - 1) ? (base + atual) / notas.length : base += atual)
  return { name: students[index], media, }
})

console.log(a);
