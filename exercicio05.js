/*
Exercício 05
Escreva um programa para ler o 
número de eleitores de um município, 
o número de votos brancos, nulos e válidos. 
Calcular e escrever o percentual que cada um representa 
em relação ao total de eleitores.
*/

let brancos = 30;
let nulos = 70;
let validos = 20;

let somatotalum = brancos + nulos + validos;
let percentual_brancos = (brancos / somatotalum) * 100;
let percentual_nulos = (nulos / somatotalum) * 100;
let percentual_validos = (validos / somatotalum) * 100;
let somatoria = percentual_brancos + percentual_nulos + percentual_validos;


console.log(`${percentual_brancos.toFixed(2)} %`);
console.log(percentual_nulos.toFixed(2), "%");
console.log(percentual_validos.toFixed(2), "%");
console.log(somatoria);
