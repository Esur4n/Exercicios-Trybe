// const fatorial = n => {
//   let results = n;
//   for (let i = n - 1; i >= 1; i -= 1) {
//     results *= i;
//   }
//   console.log(results)
// }

// fatorial(10);

let fuc = (string) => {
  let a = string.split(' ');
  let b = a[0];
  for (let i = 0; i < a.length; i += 1) {
    let c = (b.length < a[i].length) ? b = a[i] : b = b;
  }
  console.log(b);
}

fuc("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

