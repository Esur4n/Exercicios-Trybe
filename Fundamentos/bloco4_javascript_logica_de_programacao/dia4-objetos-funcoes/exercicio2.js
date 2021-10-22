// Exercicio 1
// function verificaPalindrome(word) {
//     let wordInvertida = ''
// for( let i = word.length - 1; i >= 0; i--) {
//     wordInvertida += word[i];
// }
// if(word === wordInvertida) {
//     return true
// } else {
//     return false
// }
// }

// verificaPalindrome('ovo')

// ============================

// Exercicio 2

// function maiorValor(numeros) {
//     let maior = null
//     for (let i = 0; i < numeros.length; i += 1) {
//         for (let s = 1; s < numeros.length; s += 1) {
//             if (numeros[i] < numeros[s]) {
//                 maior = [s]
//             }
//         }
//     }
//     return maior
// }

// maiorValor([2, 3, 6, 7, 10, 1])

// ============================

// Exercicio 3

// function maiorValor(numeros) {
//         let menor = 0
//         for (let i = 0; i < numeros.length; i += 1) {
//             for (let s = 1; s < numeros.length; s += 1) {
//                 if (numeros[i] > numeros[s]) {
//                     menor = [s]
//                 }
//             }
//         }
//        return menor
//     }

//     maiorValor([2, 4, 6, 7, 10, 0, -3])

// ============================

// Exercicio 4

// function somador(nomes) {
//   let maiorNome = '';
//   let nomeAtualI = '';
//   let nomeAtualS = '';
//   for (let i = 0; i < nomes.length; i += 1) {
//     for (let s = 1; s < nomes.length; s += 1) {
//     nomeAtualI = nomes[i].length
//     nomeAtualS = nomes[s].length
//     if (nomeAtualS > nomeAtualI) {
//       maiorNome = nomes[s]
//     }
//   }
//   }
//   return maiorNome
// }

// somador(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

// ============================

// Exercicio 5

// function repetente(numeros) {
//   let numeroIgual = null;
//   let quantasRepete = 0;
//   for (let i = 0; i < numeros.length; i += 1) {
//     let quantasVezes = 0;
//     for (let s = i + 1; s < numeros.length; s += 1) {
//       if (numeros[i] === numeros[s]) {
//         quantasVezes += 1;

//           if (quantasVezes > quantasRepete) {
//             quantasRepete = quantasVezes
//             numeroIgual = numeros[s]
//           }
//       }
//     }
//   }
//   return numeroIgual
// }

// repetente([2, 3, 2, 5, 8, 2, 3, 3, 3, 3, 5, 5, 5, 5, 5])

// ============================

// Exercicio 6

// function somatorio(n) {
//   let soma = 0;
//   for (i = 0; i <= n; i += 1) {
//     soma += i
//   }
//   return soma
// }

// somatorio(5)

// ============================

// Exercicio 7

function vericaFimPalavra (palavra, fimPalavra) {
  let checagem = '';
  let eOFim = null;
  for (let i = 0; i < palavra.length; i += 1) {
    for (let s = 0; s < fimPalavra.length; s += 1) {
      if (fimPalavra[s] === palavra[i]) {
        checagem += fimPalavra[s]
        if (checagem === fimPalavra) {
          eOFim = true;
        } else {
          eOFim = false;
        }
      }
    }
  }
  console.log(eOFim)
}

vericaFimPalavra('trybe', 'be')
