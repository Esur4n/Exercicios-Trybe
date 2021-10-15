let n = 7;
asteriscos = '*';


for (let i = 0; i < n; i++) {
  let espacosDentro = '';
  let espacosFora = '';
  for (let j = n + 1 - i; j <= n && j > n - 2; j++) {
    if (j === 6) {
      espacosDentro += '  ';
    } else {
      espacosDentro += ' ';
    }
  }
  for (let s = n - i - 4; s > 0; s--) {
    espacosFora += ' ';
  }
  if (i === 0) {
    console.log(espacosFora + asteriscos + espacosFora)
  } else if (i < 3) {
    console.log(espacosFora + asteriscos + espacosDentro + asteriscos + espacosFora)
    // } else if (i < n) {
    //   asteriscos += '*';
  }
}
for (k = 1; k < n; k++) {
  asteriscos += '*'
}
console.log(asteriscos)