const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const aa = numbers.reduce((primeiro, segundo) => {
  console.log(segundo);
  (segundo % 2 === 0) ? primeiro + segundo : primeiro
 }, 0);

