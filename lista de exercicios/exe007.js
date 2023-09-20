/*Crie uma função que receba três números como parâmetro (numero, minimo, maximo) e também um parâmetro booleano (inclusivo)
e retorne se o parâmetro numero (o primeiro parâmetro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja
informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a
maximo.
Exemplos:
estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true

*/


function numeros(numero, minimo, maximo, check) {
 
     if(numero >= minimo && numero <= maximo) {
        console.log('Esta entre o mínimo e o máximo!');
        return check = true;
     }  else {
        console.log('Não está entre o mínimo e o máximo!');
         return check = false;
     }
}
console.log(numeros(20, 20, 30));