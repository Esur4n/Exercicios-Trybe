const newEmployees = (funcao) => {
  const employees = {
    id1: funcao('Julio Rieger'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: funcao('Elania Souza'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: funcao('Gerson Alpiste',) // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const emailTransform = (nomeCompleto) => {
  const first = nomeCompleto.replace(' ', '_');

  return {
    nome: nomeCompleto,
    email: `${first.toLowerCase()}@trybe.com`,
  }
}

// console.log(newEmployees(emailTransform));

const HOF = (apostado, funcao) => {
  let sorteado = Math.round(Math.random() * (5 - 1) + 1);
  return funcao(apostado, sorteado);
}

const secundaria = (postado, gerado) => {
  return (postado === gerado) ? `Parabéns você ganhou` : `Tente novamente`;
}
// console.log(HOF(3, secundaria));

const HOF2 = (gabarito, obtidas, corretor) => {
  return corretor(gabarito, obtidas);
}

const secundaria2 = (corretas, alunos) => {
  let pontuacao = 0;
  for (let i = 0; i < corretas.length; i += 1) {
    if (corretas[i] === alunos[i]) {
      pontuacao += 1;
    } else if (alunos[i] === 'N.A') {
      pontuacao += 0;
    } else {
      pontuacao -= 0.5;
    }
  }
  return pontuacao;
}

console.log(HOF2(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], secundaria2));