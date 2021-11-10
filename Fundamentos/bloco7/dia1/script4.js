let determinada = "Tryber x aqui!"
const habilidades = ['a', 'b', 'c', 'd', 'e']

function a (string) {
  let abc = determinada.split(' ');
  for (let i = 0; i < abc.length; i++) {
  (abc[i] === 'x') ? abc[i] = string : abc[i] = abc[i];
  }
  let cd = abc.join(' ')
}

a('Rafael');

function b (string) {
  let hds = `${string} Minhas cinco principais habilidades sao:
  ${habilidades}`;
  console.log(hds);
}

b(cd);