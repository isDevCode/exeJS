
/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0

*/

function numero(numero1, numero2){
     let soma = 0
    for(let n = 0; n < numero2; n++){
        soma += numero1;
     
    }
    return soma;
  /*  if (numero1 && numero2 < 0) {
        console.log("Favor informar um numero positivo");
    }
    */   
    


}
console.log(numero(7, 5));