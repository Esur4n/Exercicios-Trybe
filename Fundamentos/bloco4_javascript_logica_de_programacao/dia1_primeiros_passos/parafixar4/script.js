// const comida = 'pão na chapa';
// const bebida = 'cafézinho';
// =============
// if (bebida === 'suco' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido'); }
// ================
// ==============
// const conditionOne = true;
// const conditionTwo = false;
// console.log(conditionOne && conditionTwo);
// ================
// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

// console.log(listaDeCompras);

// const currentHour= 5;
// let message= null;

// if (currentHour >= 22) {
//     message="Nao deveriamos comer nada, e hora de dormir";
// } else if (currentHour >= 18 && currentHour < 22) {
//     message="Rango da noite, vamos jantar :D";
// } else if (currentHour >= 14 && currentHour < 18) {
//     message="Vamos fazer um bolo pro cafe da tarde?";
// } else if (currentHour >= 11 &&  currentHour <= 14) {
//     message="Hora do almoco!!!";
// } else if (currentHour >= 4 && currentHour <= 11) {
//   message= "Hmmm, cheiro de cafe recem passado";
// }

// console.log(message);


// let weekday="doming";

// if (weekday === "segunda-feira" || weekday === "terca-feira" || weekday === "quarta-feira" || weekday === "quinta-feira" || weekday === "sexta-feira") {
//   console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// } else  if (weekday === "sabado" || weekday === "domingo") {
//   console.log("FINALMENTE, descanso merecido UwU");
// } else {
//   console.log("dia esta errado :p");
// }


let resultadoProva="lista";

switch (resultadoProva) {
  case "aprovada":
    console.log("parabens, foi aprovada");
    break;

  case "lista":
    console.log("voce vai para lista de espera");
    break;

  case "reprovada":
    console.log("desculpe, voce nao passou, tente novamente no ano que vem!");
    break;

  default:
    console.log("nao se aplica");
}