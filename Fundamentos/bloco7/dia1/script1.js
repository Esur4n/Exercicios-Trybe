const a = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

a(false);

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const b = () => {
  oddsAndEvens.sort((a, b) => a - b);
}

b()

console.log(`os numeros ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉