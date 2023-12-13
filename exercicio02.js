/*
Exercício 02:
Uma conta telefônica é composta dos seguintes custos:
assinatura: R$ 32,00
impulsos: R$ 0,09 por impulso que exceder a 90
chamadas p/ celular: R$0,35 por impulso
Escreva um programa que monte a fórmula 
para calcular o valor da conta para 254 impulsos e 
23 chamadas para celular imprimindo o resultado obtido.
*/

let assinatura = 32.00;
let valor_impulso = 0.09;
let valor_impulso_celular = 0.35;

let total_impulsos = 254 * valor_impulso;
let total_impulsos_celular = 23 * valor_impulso_celular;
let somatotal = total_impulsos + total_impulsos_celular + assinatura;

console.log(somatotal);
