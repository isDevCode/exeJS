
/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true

*/
function numero(n1, n2) {
   
    if(n1 == n2) {
        return 'O numero ' + n1 + ' é igual ao ' + n2;
    }else if(n1 > n2) {
        return 'O número ' + n1 + ' é maior que o ' + n2;
    }else{
        return 'O número ' + n2 + ' é maior que o ' + n1;
    }
  
}
console.log(numero(20, 14));