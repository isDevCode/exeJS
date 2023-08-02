const input =require('readline-sync');

const numero_sorteado = 5;

/*const numero = Number( input.question('Qual numero voce escolhe? '));
 
if (numero === numero_sorteado) {
    console.log('Você acertou!')
}else{
    console.log('Você errou!')
}*/

let numero = Number( input.question('Qual numero voce escolhe? '));

while (numero !== numero_sorteado) {
    console.log('Você errou o numero. Tente novamente...');
    numero = Number( input.question('Qual numero voce escolhe? '));
}
console.log('Você acertou! O numero sorteado é ' + numero);

