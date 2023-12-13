/*
Exercício 04
Um professor atribui pesos de 1 a 4 
para as notas de quatro avaliações. 
A nota é calculada por meio da média ponderada
(N1*1 + N2*2 + N3*3 + N4*4)/(1+2+3+4), 
onde N1 é a nota da primeira avaliação, 
N2 a da segunda, etc. Um aluno tirou 
as seguintes notas: 8 - 7,5 - 10 - 9. 
Faça um programa que calcula e escreva a média deste aluno.
*/

let nota1 = 8;
let nota2 = 7.5;
let nota3 = 10;
let nota4 = 9;

let mediaponderada = ((nota1 * 1 + nota2 * 2 + nota3 * 3 + nota4 * 4) / (1 + 2 + 3 + 4));
console.log(mediaponderada);
