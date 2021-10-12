// Programa 1
// const a=10;
// const b=5;

// console.log(a + b);
// console.log(a - b);
// console.log(a* b);
// console.log(a / b);
// console.log(a % b);

// Programa 2
// const a=10
// const b=15

// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// Programa 3
// const a=20;
// const b=50;
// const c=15;

// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a && b > c) {
//     console.log(b);
// } else {
//     console.log(c);
// }

// Prog 4
// const a=-150;

// if (a > 0) {
//     console.log("positive");
// } else {
//     console.log("negative");
// }


// Prog 5
// const ladoa=60;
// const ladob=6;
// const ladoc=60;

// if (ladoa < 0 || ladob < 0 || ladoc < 0) { 
//     console.log("numeral nao identificado");
// } else if (ladoa + ladob + ladoc > 180) {
//     console.log(false);
// } else if (ladoa + ladob + ladoc < 180 && ladoa + ladob + ladoc >= 0) {
//     console.log(false);
// } else if (ladoa + ladob + ladoc === 180) {
//     console.log(true);
// }

// Prog 6
// let peca="ReI";

// if (peca.toLowerCase() === "peao") {
//     console.log("uma casa a frente");
// } else if (peca.toLowerCase() === "bispo") {
//     console.log("quantas casas quiser para as diagonais");
// } else if (peca.toLowerCase() === "cavalo") {
//     console.log("em L");
// } else if (peca.toLowerCase() === "rainha") {
//     console.log("quantas casas quiser para uma direcao escolhida");
// } else if (peca.toLowerCase() === "torre") {
//     console.log("quantas casas quiser para os lados");
// } else if (peca.toLowerCase() === "rei") {
//     console.log("uma casa para qualquer direcao");
// } else {
//     console.log("ERRO, PECA NAO ENCONTRADA.")
// }

// Prog 7
// const nota=49

// if (nota > 100 || nota < 0) {
//     console.log("ERRO, NOTA INVALIDA")
// } else if (nota >= 90) {
//     console.log("A");
// } else if (nota >= 80) {
//     console.log("B");
// } else if (nota >= 70) {
//     console.log("C");
// } else if (nota >= 60) {
//     console.log("D");
// } else if (nota >= 50) {
//     console.log("E");
// } else if (nota < 50) {
//     console.log("F")
// }

// Prog 8
// const a=3
// const b=5
// const c=7

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Prog 9
// const a=2
// const b=6
// const c=3

// if (a % 2 > 0 || b % 2 > 0 || c % 2 > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Prog 10
// const custo=10;
// const valorVenda=13;
// const imposto=1.2;
// const custoTotal=custo * imposto;
// const lucro=valorVenda - custoTotal;

// if (custo < 0 || valorVenda < 0) {
//     console.log("ERRO, ENCERRANDO SISTEMA POR MOTIVOS DE SEGURANCA");
// } else {
//     console.log(lucro * 1000);
// }

// Prog 11
const salarioBruto=10000;
let inss1=salarioBruto * 0.08;
let inss2=salarioBruto * 0.09;
let inss3=salarioBruto * 0.11;
let inss4=570.88;
let salarioBase=undefined;
let salarioLiquido=undefined

if (salarioBruto <= 1556.94) {
    salarioBase=salarioBruto - inss1;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase=salarioBruto - inss2;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBase=salarioBruto - inss3;
} else if (salarioBruto > 5189.82) {
    salarioBase=salarioBruto - inss4;
}

let ir1=null;
let ir2=salarioBase * 0.075 - 142.80;
let ir3=salarioBase * 0.15 - 354.80;
let ir4=salarioBase * 0.225 - 636.13;
let ir5=salarioBase * 0.275 - 869.36;

if (salarioBase < 1903.98) {
    salarioLiquido=salarioBase - ir1;
    console.log(salarioLiquido);
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    salarioLiquido=salarioBase - ir2;
    console.log(salarioLiquido);
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.06) {
    salarioLiquido=salarioBase - ir3;
    console.log(salarioLiquido);
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    salarioLiquido=salarioBase - ir4;
    console.log(salarioLiquido);
} else if (salarioBase > 4664.68) {
    salarioLiquido=salarioBase - ir5;
    console.log(salarioLiquido)
}