function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
  };
};
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Exercicio 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let days = document.querySelector('#days')

for (let i = 0; i < dezDaysList.length; i += 1) {
      let today = document.createElement('li');
      today.className = 'day';
      today.innerText = dezDaysList[i];
      if (today.innerText == '24' || today.innerText == '25' || today.innerText == '31') {
          today.classList.add('holiday')
    }
      if (today.innerText == '4' || today.innerText == '11' || today.innerText == '18' || today.innerText == '25') {
        today.classList.add('friday')
  }
      days.appendChild(today);
}

  // Exercicio 2
let containerButton = document.querySelector('.buttons-container')
function buttonCreator(coisa, id) {
  let botao = document.createElement('button');
  botao.innerText = coisa;
  botao.id = id;
  containerButton.appendChild(botao);
}
buttonCreator('Feriados', 'btn-holiday')

// Exercicio 3
function corHoliday() {
  let holidays = document.querySelectorAll('.holiday');
  let botaoFeriado = document.querySelector('#btn-holiday')
  let normalColor = 'rgb(238,238,238)';
  let newColor = 'aqua'

  botaoFeriado.addEventListener('click', function() {
  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].style.backgroundColor === newColor) {
      holidays[i].style.backgroundColor = normalColor;
    } else {
      holidays[i].style.backgroundColor = newColor}
  }
  })
}
corHoliday()

// Exercicio 4
buttonCreator('Sexta-Feira', 'btn-friday')