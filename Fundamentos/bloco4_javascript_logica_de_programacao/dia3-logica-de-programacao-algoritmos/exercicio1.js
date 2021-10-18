let n = 5;
let asteriscos = '';


// for (let i = 1; i <= n; i++) {
//   if (i === 1) {
//     asteriscos = '    *'
//     console.log(asteriscos)
//   } else if (i === 2) {
//     asteriscos = '   **'
//     console.log(asteriscos)
//   } else if (i === 3) {
//     asteriscos = '  ***'
//     console.log(asteriscos)
//   } else if (i === 4) {
//     asteriscos = ' ****'
//     console.log(asteriscos)
//   } else if (i === 5) {
//     asteriscos = '*****'
//     console.log(asteriscos)
//   }
// }

// ======================

// for (let i = 0; i < n; i++) {
//   asteriscos += "*";
//   console.log(asteriscos)
// }

// =========================

// for (let i = 0; i < n; i++) {
//   let espacos = '';
//   for (let s = n-i-1; s > 0; s--) {
//     espacos += ' '
//   }
//     asteriscos += "*";
//     console.log(espacos + asteriscos)
//   }

// ================================


for (let i = 0; i < n; i++) {
  let espacos = '';
  for (let s = n - i - 3; s > 0; s--) {
    espacos += ' '
  }
  if (i === 0) {
    asteriscos += "*";
  } else if (i === 2 || i === 4) {
    continue;
  } else {
    asteriscos += '**';
  }
  
  console.log(espacos + asteriscos + espacos)
}