const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addnoite(objeto, chave, valor) {
  objeto[chave] = valor;
  // console.log(lesson2);
}

addnoite(lesson2, 'turno', 'noite');

function listKeys(objeto) {
  // console.log(Object.keys(objeto));
}

listKeys(lesson1);

function size(objeto) {
  console.log(Object.keys(objeto).length);
}

// size(lesson1);

function listValues(objeto) {
  console.log(Object.values(objeto));
}

// listValues(lesson1);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

function allStd() {
  let totalStds = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes; 
  console.log(totalStds);
}

// allStd();

function keyValue(objeto, posicao) {
  console.log(Object.values(objeto)[posicao]);
}

// keyValue(lesson1, 0);

function check(objeto, chave, valor) {
  let vdd;
  for (let i in objeto) {
    if (i === chave && objeto[i] === valor) {
      vdd = true;
      break;
    } else {
      vdd = false
    }
  }
  console.log(vdd)
}

check(lesson1, 'materia', 'Matemátic');